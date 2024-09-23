<template>

  <v-container>
    <v-row>
      <v-col>
        <v-btn color="primary" @click="openCreateAccountModal">Создать аккаунт</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn color="secondary" @click="openTransferModal">Создать перевод</v-btn>
      </v-col>
    </v-row>
    <v-list lines="two">
      <v-list-item v-for="account in normalizedAccounts" :key="account.account_id" :title="account.account_name"
        :subtitle="account.balance">

        <template v-slot:append>
          <v-btn @click="onDeleteAccount(account.account_id)" icon="mdi-delete" variant="text"></v-btn>
        </template>
      </v-list-item>
    </v-list>


    <v-row :style="account.is_hidden && 'oppacity: 30%'" v-for="account in normalizedAccounts" :key="account.account_id"
      class="d-flex justify-space-between">
      <v-col>{{ account.account_name }}</v-col>
      <v-col>{{ account.balance ?? 'Нет данных' }}</v-col>

      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps" color="primary">Перевод</v-btn>




        </template>

        <template v-slot:default="{ isActive }">
          <v-card title="Перевод">
            <v-card-text>
              <TransferForm :fromAccountId="account.account_id">
              </TransferForm>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text="Закрыть" @click="isActive.value = false"></v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>



      <v-btn color="error" @click="onDeleteAccount(account.account_id)">Удалить</v-btn>
    </v-row>

    <!-- Модальные окна -->
    <create-account-modal v-if="showCreateAccountModal" @close="closeCreateAccountModal" />
    <transfer-modal v-if="showTransferModal" :account="selectedAccount" :accounts="accounts" @close="closeTransferModal"
      @transfer="handleTransfer" />
  </v-container>
</template>

<script lang="ts" setup>
import CreateAccountModal from '@/components/accounts/CreateAccountModal.vue'
import TransferModal from '@/components/accounts/TransferModal.vue'
import { useMutation, useQueryClient } from '@tanstack/vue-query';

import { useAccountsData } from '@/composables/useAccountsData'


const { accountBalances, accounts } = useAccountsData()
const client = useQueryClient()

const { mutate: deleteAccount, reset } = useMutation({
  mutationFn: async (deletedId: number) => $fetch(`/api/accounts/${deletedId}/list`, {
    method: 'DELETE',
  }),
  onSuccess: () => {
    useNuxtApp().$toast.success("Счет успешно удален", {
      autoClose: 1000,
    });
    client.invalidateQueries({ queryKey: ['accounts'] });
    client.invalidateQueries({ queryKey: ['account-balances'] });

  },
  onSettled: () => {
    setTimeout(() => {
      reset();
    }, 1000);
  },
});




const normalizedAccounts = computed(() => {
  if (accountBalances.value && accounts.value) {
    return accounts.value.map((account) => ({
      ...account,
      balance: accountBalances.value.find((el) => el.account_id === account.account_id)?.balance
    }))
  }
  return []

})

type Account = typeof normalizedAccounts.value[0]



// const accounts = ref([
//   { account_id: 1, user_id: 1, account_name: 'Account 1', balance: '1000', created_date: '2023-09-21' },
//   { account_id: 2, user_id: 2, account_name: 'Account 2', balance: '500', created_date: '2023-09-21' }
// ]);

const showCreateAccountModal = ref(false);
const showTransferModal = ref(false);
const selectedAccount = ref<Account>();

const openCreateAccountModal = () => {
  showCreateAccountModal.value = true;
};

const closeCreateAccountModal = () => {
  showCreateAccountModal.value = false;
};

const openTransferModal = (account: Account = null) => {
  selectedAccount.value = account;
  showTransferModal.value = true;
};

const closeTransferModal = () => {
  showTransferModal.value = false;
};



const handleTransfer = (transferData) => {
  // Логика обработки перевода
  closeTransferModal();
};

const onDeleteAccount = (accountId: number) => {
  deleteAccount(accountId)
};






</script>

<style></style>