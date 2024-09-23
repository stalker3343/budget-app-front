import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type {
  ITransactionCreate,
  ITransaferTransaction,
} from "~/server/validation/transactions/types";

export const useAddTransaction = () => {
  const client = useQueryClient();

  const {
    mutate: addTransaction,
    mutateAsync: addTransactionAsync,
    reset: resetAddTransaction,
  } = useMutation({
    mutationFn: async (transaction: ITransactionCreate) =>
      $fetch("/api/transactions/list", {
        method: "POST",
        body: transaction,
      }),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["account-balances"] });

      useNuxtApp().$toast.success("Транзакция создана", {
        autoClose: 1000,
      });
    },
    onSettled: () => {
      setTimeout(() => {
        resetAddTransaction();
      }, 1000);
    },
  });

  return {
    addTransaction,
    addTransactionAsync,
  };
};

export const useDeleteTransaction = () => {
  const client = useQueryClient();

  const { mutate: deleteTransaction, reset } = useMutation({
    mutationFn: async (transactionId: number) =>
      $fetch(`/api/transactions/${transactionId}/list`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["account-balances"] });
      client.invalidateQueries({ queryKey: ["categs-transactions-summ"] });
      client.invalidateQueries({ queryKey: ["categs-transactions"] });

      useNuxtApp().$toast.success("Транзакция удалена", {
        autoClose: 1000,
      });
    },
    onSettled: () => {
      setTimeout(() => {
        reset();
      }, 1000);
    },
  });

  return {
    deleteTransaction,
  };
};

export const useCreateTransferTransaction = () => {
  const client = useQueryClient();

  const {
    mutate: addTransaferTransactionMutation,
    reset: resetAddTransaction,
    isPending: createTransactionIsPending,
  } = useMutation({
    mutationFn: async (transferTransaction: ITransaferTransaction) =>
      $fetch("/api/transactions/transfer", {
        method: "POST",
        body: transferTransaction,
      }),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["account-balances"] });

      useNuxtApp().$toast.success("Перевод создан", {
        autoClose: 1000,
      });
    },
    onSettled: () => {
      setTimeout(() => {
        resetAddTransaction();
      }, 1000);
    },
  });

  return {
    addTransaferTransactionMutation,
  };
};
