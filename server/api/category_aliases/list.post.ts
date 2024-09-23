import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
import { z } from "zod";

const userSchema = z.object({
  alias_bank: z.enum(["GPB", "TCS"]),
  alias_name: z.string().min(1),
  alias_type: z.enum(["name", "categ"]),
  category_id: z.coerce.number(),
});

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, (body) =>
    userSchema.safeParse(body)
  );

  if (!result.success) {
    throw createError({
      status: 400,
      message: JSON.stringify(result.error.issues),
    });
  }

  return await prisma.category_aliases.create({
    data: {
      ...result.data,
    },
  });
});
