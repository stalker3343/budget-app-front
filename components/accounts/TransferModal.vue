<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>Создать перевод</v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-select v-model="fromAccount" :items="accounts" item-text="account_name" item-value="account_id"
            label="Откуда перевести" required></v-select>

          <v-select v-model="toAccount" :items="accounts" item-text="account_name" item-value="account_id"
            label="Куда перевести" required></v-select>

          <v-text-field v-model="amount" label="Сумма" type="number" required></v-text-field>
          <v-text-field v-model="comment" label="Комментарий"></v-text-field>
          <v-text-field v-model="transferDate" label="Дата" type="date" required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="saveTransfer">Сохранить</v-btn>
        <v-btn @click="close">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['account', 'accounts'],
  data() {
    return {
      dialog: true,
      fromAccount: this.account ? this.account.account_id : null,
      toAccount: null,
      amount: '',
      comment: '',
      transferDate: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    close() {
      this.$emit('close');
      this.dialog = false;
    },
    saveTransfer() {
      const transferData = {
        fromAccount: this.fromAccount,
        toAccount: this.toAccount,
        amount: this.amount,
        comment: this.comment,
        transferDate: this.transferDate
      };
      this.$emit('transfer', transferData);
      this.close();
    }
  }
};
</script>
