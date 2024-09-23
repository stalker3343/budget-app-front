SELECT
  a.account_id,
  a.account_name,
  sum(
    CASE
      WHEN (t.transaction_type = 'Income' :: transaction_type) THEN t.amount
      WHEN (t.transaction_type = 'Expense' :: transaction_type) THEN (- t.amount)
      WHEN (t.transaction_type = 'SetIncome' :: transaction_type) THEN t.amount
      WHEN (t.transaction_type = 'SetExpense' :: transaction_type) THEN (- t.amount)
      ELSE (0) :: numeric
    END
  ) AS balance

FROM
  (
    accounts a
    LEFT JOIN transactions t ON ((a.account_id = t.account_id))
  )
GROUP BY
  a.account_id,
  a.account_name;