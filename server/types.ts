import { categories_type } from "@prisma/client";

export interface BankRecord {
  source: string;
  amount: number;
  category: string;
  type: "income" | "expense";
  status?: "completed" | "failed";
  cashback: number | null;
}

export type BankRecordCateged = BankRecord & { predictCateg: number | null };

export enum CATEGORIES_TYPE {
  "Income" = "Income",
  "Expense" = "Expense",
}

export enum TRANSACTION_TYPES {
  "INCOME" = "Income",
  "EXPENSE" = "Expense",
}

export enum ALIAS_TYPE {
  "name" = "name",
  "categ" = "categ",
}

export enum BANKS {
  "GPB" = "GPB",
  "TCS" = "TCS",
}

export interface Category {
  category_id: number;
  user_id: number;
  parent_category_id?: number | null; // Parent category can be null
  category_name: string;
  category_type: CATEGORIES_TYPE;
  description?: string | null; // Description is optional and can be null
}

export interface CategoryAlias {
  alias_id: number;
  alias_bank: string;
  alias_type: ALIAS_TYPE;
  alias_name: string;
  category_id: number; // References the category_id from the Category type
}

export interface AccountBalance {
  account_id: number;
  account_name: string;
  balance: number;
}

export interface Account {
  account_id: number;
  user_id: number;
  account_name: string;
  created_date: Date;
}
