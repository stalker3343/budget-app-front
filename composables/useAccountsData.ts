import { useQuery } from "@tanstack/vue-query";

export function useAccountsData() {
  const {
    data: accountBalances,
    isLoading: isLoadingBalances,
    error: errorBalances,
  } = useQuery({
    queryKey: ["account-balances"],
    queryFn: () =>
      $fetch("/api/account-balances", {
        method: "GET",
        server: false,
      }),
  });

  const {
    data: accounts,
    isLoading: isLoadingAccounts,
    error: errorAccounts,
  } = useQuery({
    queryKey: ["accounts"],
    queryFn: () =>
      $fetch("/api/accounts/list", {
        method: "GET",
        server: false,
      }),
  });

  const normalizedAccounts = computed(() => {
    if (accountBalances.value && accounts.value) {
      return accounts.value.map((account) => ({
        ...account,
        balance: accountBalances.value.find(
          (el) => el.account_id === account.account_id
        )?.balance,
      }));
    }
    return [];
  });

  return {
    accountBalances,
    accounts,
    normalizedAccounts,
    isLoading: isLoadingBalances || isLoadingAccounts,
    error: errorBalances || errorAccounts,
  };
}
