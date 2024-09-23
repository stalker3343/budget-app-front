<template>
  <div>

    <v-text-field density="compact" v-model.number="localAmount" label="Сумма" type="number" required></v-text-field>


    <v-select density="compact" variant="solo-filled" :model-value="fromAccountId" :items="accounts"
      item-title="account_name" item-value="account_id" label="Откуда перевести" disabled>
    </v-select>

    <v-select v-model="toAccountId" :items="accounts" variant="solo-filled" item-title="account_name"
      item-value="account_id" label="Куда перевести"></v-select>



    <v-text-field density="compact" v-model="localTransferDate" label="Дата" type="date" required></v-text-field>


    <div class="card-buttons">
      <VBtn @click="onCreateTransfer" class="save-btn">
        Сохранить
      </VBtn>
      <!-- <button class="delete-btn" @click="deleteSpending(index)">Delete</button> -->
    </div>


  </div>
</template>

<script lang="ts" setup>
import { transaferTransactionSchema } from "~/server/validation/transactions/types";
import { useCreateTransferTransaction } from '~/composables/useTransactions';

const { accounts } = useAccountsData()

const { addTransaferTransactionMutation } = useCreateTransferTransaction()

const toAccountId = ref('')

type Props = {
  amount?: number,
  fromAccountId: string | number,
  transferDate?: string,
}

const props = withDefaults(defineProps<Props>(), {
  transferDate: new Date().toString()
})




const localAmount = ref(props.amount)
const localTransferDate = ref(new Date(props?.transferDate).toISOString().substr(0, 10))

const onCreateTransfer = async () => {
  const validateTransferRes = transaferTransactionSchema.safeParse({
    amount: localAmount.value,
    account_id_from: props.fromAccountId,
    account_id_to: toAccountId.value,
    transaction_date: localTransferDate.value,
  })
  if (validateTransferRes.error) {
    alert(validateTransferRes.error.message)
    return
  }
  addTransaferTransactionMutation({
    ...validateTransferRes.data
  })


}

</script>

<style lang="scss" scoped>
.transfer-row {
  display: grid;
  grid-auto-columns: 1fr 10px 1fr;
}
</style>