// server/api/query.post.ts
import { createWorker } from "tesseract.js";

import { defineEventHandler, readBody, H3Error } from "h3";

import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import { gazpromParser } from "../helpers/parsers";
export default defineEventHandler(async (event) => {
  // Read the query from the request body
  const form = new IncomingForm();
  const { image } = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, images) => {
      if (err) reject(err);
      resolve(images);
    });
  });

  // if (
  //   !image ||
  //   !image.image ||
  //   !Array.isArray(image.image) ||
  //   image.image.length === 0
  // ) {
  //   return { error: "No image provided" };
  // }

  const imagePath = image[0].filepath;
  let worker = null;
  try {
    worker = await createWorker("rus", 2);
    const ret = await worker.recognize(imagePath);

    fs.unlinkSync(imagePath); // Clean up temporary image

    // Return the query result to the client
    return {
      success: true,
      data: gazpromParser(ret.data.text),
      initialText: ret.data.text,
    };
  } catch (error: any) {
    console.error("error:", error.message);
    throw new H3Error({
      statusCode: 500,
      message: "Error executing query: " + error.message,
    });
  } finally {
    // Ensure the client is disconnected after the query
    await worker.terminate();
  }
});
