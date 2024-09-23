// server/api/query.post.ts
import { createWorker } from "tesseract.js";

import { defineEventHandler, readBody, H3Error } from "h3";
import pg from "pg";
const { Client } = pg;
import formidable, { IncomingForm } from "formidable";
import fs from "fs";
import { gazpromParser } from "../helpers/parsers";
import { setCategsToTransactions } from "../helpers/setCategsToTransactions";
import { BANKS, Category, CategoryAlias } from "../types";

export default defineEventHandler(async (event) => {
  // Read the query from the request body
  const form = new IncomingForm();
  const { image }: formidable.Files<string> = await new Promise(
    (resolve, reject) => {
      form.parse(event.node.req, (err, fields, images) => {
        if (err) reject(err);
        resolve(images);
      });
    }
  );

  // Database connection configuration
  const client = new Client({
    host: process.env.PG_HOST || "localhost",
    user: process.env.PG_USER || "your_user",
    password: process.env.PG_PASSWORD || "your_password",
    database: process.env.PG_DB || "your_database",
    port: parseInt(process.env.PG_PORT || "5432", 10),
  });

  if (!image || !Array.isArray(image) || image.length === 0) {
    return { error: "No image provided" };
  }

  const imagePath = image[0].filepath;
  let worker = null;
  try {
    worker = await createWorker("rus+eng", 2);
    const ret = await worker.recognize(imagePath);

    fs.unlinkSync(imagePath); // Clean up temporary image
    // Connect to the PostgreSQL database
    await client.connect();

    // Execute the query from the request body
    const { rows: categList } = await client.query<Category>(
      `Select * FROM categories`
    );

    const { rows: categAliases } = await client.query<CategoryAlias>(
      `Select * FROM category_aliases`
    );

    const parsedTransactions = gazpromParser(ret.data.text);
    const transactionsWithCategs = setCategsToTransactions(parsedTransactions, {
      categList,
      categAliases,
      bank: BANKS.GPB,
    });
    // Return the query result to the client
    return {
      success: true,
      data: transactionsWithCategs,
      initialText: ret.data.text,
    };
  } catch (error: any) {
    console.error("error:", error.message);
    throw new H3Error("Error executing query: " + error.message);
  } finally {
    // Ensure the client is disconnected after the query
    worker && (await worker.terminate());
  }
});
