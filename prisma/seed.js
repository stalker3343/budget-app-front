import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  /*
  INSERT INTO public.categories (user_id,parent_category_id,category_name,category_type) VALUES
	 (3,NULL,'Транспорт','Expense'::public."categories_type"),
	 (3,NULL,'Продукты','Expense'::public."categories_type"),
	 (3,NULL,'Семья','Expense'::public."categories_type"),
	 (3,NULL,'Кафе','Expense'::public."categories_type"),
	 (3,NULL,'Аптека','Expense'::public."categories_type"),
	 (3,NULL,'Подарки','Expense'::public."categories_type"),
	 (3,NULL,'Развлечения','Expense'::public."categories_type"),
	 (3,NULL,'Дом','Expense'::public."categories_type"),
	 (3,NULL,'Здоровье','Expense'::public."categories_type"),
	 (3,NULL,'Спорт','Expense'::public."categories_type");
INSERT INTO public.categories (user_id,parent_category_id,category_name,category_type) VALUES
	 (3,NULL,'Образование','Expense'::public."categories_type"),
	 (3,NULL,'Другое','Expense'::public."categories_type"),
	 (3,NULL,'Подписки','Expense'::public."categories_type"),
	 (3,NULL,'Налоги','Expense'::public."categories_type"),
	 (3,NULL,'Комуналка','Expense'::public."categories_type"),
	 (3,NULL,'Аренда','Expense'::public."categories_type"),
	 (3,NULL,'Красота','Expense'::public."categories_type"),
	 (3,NULL,'Большие покупки','Expense'::public."categories_type"),
	 (3,NULL,'Путешествия','Expense'::public."categories_type"),
	 (3,NULL,'Связь','Expense'::public."categories_type");
INSERT INTO public.categories (user_id,parent_category_id,category_name,category_type) VALUES
	 (3,NULL,'ОРЗ','Expense'::public."categories_type"),
	 (3,NULL,'Одежда','Expense'::public."categories_type"),
	 (3,NULL,'Такси','Expense'::public."categories_type");


	 -- Auto-generated SQL script #202409231300
INSERT INTO public.categories (user_id,category_name,category_type)
	VALUES (3,'Заплата','Income'::public."categories_type");
INSERT INTO public.categories (user_id,category_name,category_type)
	VALUES (3,'Подарок','Income'::public."categories_type");
INSERT INTO public.categories (user_id,category_name,category_type)
	VALUES (3,'Мама','Income'::public."categories_type");
INSERT INTO public.categories (user_id,category_name,category_type)
	VALUES (3,'Кешбек','Income'::public."categories_type");
INSERT INTO public.categories (user_id,category_name,category_type)
	VALUES (3,'Вклад','Income'::public."categories_type");
INSERT INTO public.categories (user_id,category_name,category_type)
	VALUES (3,'Другое','Income'::public."categories_type");


  */
  const course = await prisma.course.create({
    data: {
      title: "TypeScript with Vue.js 3",
    },
  });
  // Insert all data here
}

try {
  await seed();
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}
