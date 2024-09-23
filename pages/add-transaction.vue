<template>


    <div class="pb-10" v-if="categories && normalizedAccounts">

        <v-btn-toggle color="primary" class="mb-3" style="width: 100%" v-model="newTransaction.transaction_type"
            divided>
            <v-btn style="width: 50%" :value="TRANSACTION_TYPES.EXPENSE">Расход</v-btn>
            <v-btn style="width: 50%" :value="TRANSACTION_TYPES.INCOME">Доход</v-btn>
        </v-btn-toggle>
        <div>
            <div class="mb-1">Счета</div>
            <AccountsList v-model="newTransaction.account_id"></AccountsList>

            <!-- <v-item-group class="accounts-list" v-model="newTransaction.account_id" selected-class="bg-primary">
                <v-item :value="account.account_id" v-for="account in normalizedAccounts"
                    v-slot="{ isSelected, selectedClass, toggle }">
                    <div :class="['account-item', selectedClass]" dark @click="toggle">
                        <div class="text-center">
                            {{ account.account_name }}
                        </div>
                        <div>
                            {{ account.balance }}
                        </div>

                    </div>

                </v-item>
            </v-item-group> -->
        </div>

        <div class="mb-1">Сумма</div>
        <VTextField v-model.number="newTransaction.amount"></VTextField>
        <div class="mb-1">Категории</div>
        <v-item-group class="mb-3" v-model="newTransaction.category_id" selected-class="bg-primary">
            <v-row no-gutters>
                <v-col v-for="categ in categories" :key="categ.category_id" cols="3">
                    <v-item :value="categ.category_id" v-slot="{ isSelected, selectedClass, toggle }">
                        <v-card :class="['d-flex align-center', selectedClass]" height="50" dark @click="toggle">
                            <div class="flex-grow-1 text-center">
                                {{ categ.category_name }}
                            </div>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-item-group>
        <div class="mb-1">Дата</div>
        <input style="font-size: 18px;" class="mb-2" type="date" v-model="newTransaction.transaction_date">
        <VBtn color="primary" block @click="onCreateTransaction">Создать</VBtn>




    </div>
</template>

<script setup lang="ts">
import { useAddTransaction } from "~/composables/useTransactions";
import { type ITransactionCreate, transactionCreateSchema } from "~/server/validation/transactions/types";
import { TRANSACTION_TYPES } from "~/server/types";

const { $dayjs } = useNuxtApp()


const { normalizedAccounts } = useAccountsData()
const { addTransactionAsync } = useAddTransaction()



const getDefaultTransactionPayload: () => Partial<ITransactionCreate> = () => ({
    amount: 0,
    notes: '',
    transaction_date: $dayjs().toDate(),
    account_id: undefined,
    category_id: undefined,
    transaction_type: TRANSACTION_TYPES.EXPENSE,
    cashback: null
})
const newTransaction = ref(getDefaultTransactionPayload());

const selectedCategorieType = computed(() => newTransaction.value.transaction_type)

const { categories } = useGetCategories({
    category_type: selectedCategorieType
})




const resetTransactionForm = () => {
    newTransaction.value = getDefaultTransactionPayload()
}
const onCreateTransaction = async () => {
    const validateTransactionRes = transactionCreateSchema.safeParse(newTransaction.value)
    if (validateTransactionRes.error) {
        alert(validateTransactionRes.error.message)
        return
    }
    const response = await addTransactionAsync({
        ...validateTransactionRes.data
    })

    resetTransactionForm()

}


</script>


<style lang="scss" scoped>
.account-item {
    width: 60px;
    font-size: 12px;
    text-align: center;
    color: white;
    background: grey;
    /* display: flex; */
    align-items: center;
    justify-content: center;
}

.accounts-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    column-gap: 20px;
}
</style>