import type { BankRecordCateged } from "./server/types";

export type BankRecordWithSelectedCateg = BankRecordCateged & {
  selectedCateg: BankRecordCateged["predictCateg"];
};
