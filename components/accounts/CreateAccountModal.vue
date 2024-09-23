<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>Создать аккаунт</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field v-model="accountName" label="Название аккаунта" required></v-text-field>
          <v-text-field v-model="initialBalance" label="Начальный баланс" type="number" required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="save">Сохранить</v-btn>
        <v-btn @click="close">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { useMutation, useQueryClient } from '@tanstack/vue-query';


const dialog = ref(true);
const accountName = ref('');
const initialBalance = ref('');

const emit = defineEmits<{
  close: []
}>()

const close = () => {
  emit('close');
  dialog.value = false;
};

const client = useQueryClient()
const { mutate: createAccount, reset } = useMutation({
  mutationFn: async () => {
    const res = await $fetch('/api/accounts/list', {
      method: 'POST',
      body: {
        account_name: accountName.value,
        balance: +initialBalance.value,
      },
    })
  },
  onSuccess: () => {
    useNuxtApp().$toast.success("Счет успешно создан", {
      autoClose: 1000,
    });
    client.invalidateQueries({ queryKey: ['account-balances'] });
    client.invalidateQueries({ queryKey: ['accounts'] });
  },
  onSettled: () => {
    setTimeout(() => {
      reset();
    }, 1000);
  },
});



const save = () => {
  createAccount();

  close();
};


</script>
