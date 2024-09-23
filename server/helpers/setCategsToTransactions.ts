import {
  BANKS,
  BankRecordCateged,
  Category,
  CategoryAlias,
  BankRecord,
} from "../types";

export function setCategsToTransactions(
  parsedTransactions: BankRecord[],
  arg1: { categList: Category[]; categAliases: CategoryAlias[]; bank: BANKS }
): BankRecordCateged[] {
  const { categAliases, bank } = arg1;

  // Шаг 1: Отфильтровать alias-ы по банку
  const filteredAliases = categAliases.filter(
    (alias) => alias.alias_bank === bank
  );

  // Шаг 2: Проходим по каждой транзакции и пытаемся найти подходящий alias
  return parsedTransactions.map((transaction) => {
    // Попробуем сначала найти по source и alias_type === 'name'
    let foundAlias = filteredAliases
      .filter((alias) => alias.alias_type === "name")
      .find((alias) => alias.alias_name === transaction.source);

    // Если не найдено, пробуем найти по category и alias_type === 'categ'
    if (!foundAlias) {
      foundAlias = filteredAliases
        .filter((alias) => alias.alias_type === "categ")
        .find((alias) => alias.alias_name === transaction.category);
    }

    // Если нашли подходящий alias, добавляем category_id как predictCateg
    return {
      ...transaction,
      predictCateg: foundAlias ? foundAlias.category_id : null,
    };
  });
}
