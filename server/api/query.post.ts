// server/api/query.post.ts
import pg from "pg";
const { Client } = pg;

import { defineEventHandler, readBody } from "h3";
import { H3Error } from "h3";

export default defineEventHandler(async (event) => {
  // Read the query from the request body
  const body = await readBody<{ query: string }>(event);

  if (!body || !body.query) {
    throw new H3Error("No query provided in the request body");
  }

  // Database connection configuration
  const client = new Client({
    host: process.env.PG_HOST || "localhost",
    user: process.env.PG_USER || "your_user",
    password: process.env.PG_PASSWORD || "your_password",
    database: process.env.PG_DB || "your_database",
    port: parseInt(process.env.PG_PORT || "5432", 10),
  });

  try {
    // Connect to the PostgreSQL database
    await client.connect();

    // Execute the query from the request body
    const result = await client.query(body.query);

    // Return the query result to the client
    return {
      success: true,
      data: result.rows,
    };
  } catch (error: any) {
    console.error("Database error:", error.message);
    throw new H3Error("Error executing query: " + error.message);
  } finally {
    // Ensure the client is disconnected after the query
    await client.end();
  }
});
