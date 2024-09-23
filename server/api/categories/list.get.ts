import { PrismaClient, categories_type } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

const filtersSchema = z.object({
  category_type: z
    .enum([categories_type.Expense, categories_type.Income])
    .optional(),
});

export default defineEventHandler(async (event) => {
  const query = await getValidatedQuery(event, filtersSchema.parse);

  return prisma.categories.findMany({
    where: {
      category_type: query.category_type,
    },
  });
});
