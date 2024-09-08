<template>


    <div v-if="categoriesData && accountsData && accountbalancesData">

        <v-btn-toggle color="primary" class="mb-3" style="width: 100%"
            v-model="createTransactionPayload.TransactionType" divided>
            <v-btn style="width: 50%" :value="TRANSACTION_TYPES.EXPENSE">Расход</v-btn>
            <v-btn style="width: 50%" :value="TRANSACTION_TYPES.INCOME">Доход</v-btn>
        </v-btn-toggle>
        <div>
            <div class="mb-1">Счета</div>
            <v-item-group class="mb-3" v-model="selectedAccount" selected-class="bg-primary">
                <v-item :value="account.AccountId" v-for="account in normalizedAccounts"
                    v-slot="{ isSelected, selectedClass, toggle }">
                    <div :class="['account-item', selectedClass]" dark @click="toggle">
                        <div class="text-center">
                            {{ account.AccountName }}
                        </div>
                        <div>
                            {{ account.balance }}
                        </div>

                    </div>

                </v-item>
            </v-item-group>
        </div>

        <div class="mb-1">Сумма</div>
        <VTextField v-model.number="createTransactionPayload.Amount"></VTextField>
        <div class="mb-1">Категории</div>
        <v-item-group class="mb-3" v-model="selectedTransactionCateg" selected-class="bg-primary">
            <v-row no-gutters>
                <v-col v-for="categ in categoriesData.list" :key="n" cols="3">
                    <v-item :value="categ.CategoryId" v-slot="{ isSelected, selectedClass, toggle }">
                        <v-card :class="['d-flex align-center', selectedClass]" height="50" dark @click="toggle">
                            <div class="flex-grow-1 text-center">
                                {{ categ.CategoryName }}
                            </div>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-item-group>
        <div class="mb-1">Дата</div>
        <input style="font-size: 18px;" class="mb-2" type="date" v-model="createTransactionPayload.TransactionDate">
        <VBtn color="primary" block @click="onCreateTransaction">Создать</VBtn>




    </div>
</template>

<script setup lang="ts">
import { TRANSACTION_LINK_FIELDS, TRANSACTION_TYPES } from "~/consts";

const { $apiService } = useNuxtApp();
const { data: categoriesData, } = useAsyncData("categories/list", () =>
    $apiService.v1.categoriesDbTableRowList()
    , { server: false });

const { data: accountbalancesData, refresh: refreshAccountBalances } = useAsyncData("accountbalances/list", () =>
    $apiService.v1.accountbalancesDbTableRowList()
    , { server: false });

const { data: accountsData } = useAsyncData("accounts/list", () =>
    $apiService.v1.accountsDbTableRowList()
    , { server: false });

const normalizedAccounts = computed(() => {
    // TODO when no account situation
    if (accountsData.value && accountbalancesData.value) {
        return accountsData.value.list?.map(account => ({
            ...account,
            balance: accountbalancesData.value.list?.find(el => el.AccountId === account.AccountId)?.Balance
        }))
    }
    return []

})
const getDefaultTransactionPayload = () => ({
    Amount: 0,
    Notes: "",
    TransactionDate: new Date().toLocaleDateString(undefined, { year: 'numeric', day: 'numeric', month: 'numeric' }).split('.').reverse().join('-'),
    TransactionType: TRANSACTION_TYPES.EXPENSE,
})
const createTransactionPayload = ref(getDefaultTransactionPayload());

const selectedTransactionCateg = ref("");
const selectedAccount = ref("");



const resetTransactionForm = () => {
    createTransactionPayload.value = getDefaultTransactionPayload()
    selectedTransactionCateg.value = ''
    selectedAccount.value = ''
}
const onCreateTransaction = async () => {
    const response = await $apiService.v1.transactionsCreate(createTransactionPayload.value)

    if (response && response.TransactionId) {
        await $apiService.v1.transactionsNestedLink(TRANSACTION_LINK_FIELDS.CATEGORIES, String(response.TransactionId),
            { 'CategoryId': selectedTransactionCateg.value }
        )
        await $apiService.v1.transactionsNestedLink(TRANSACTION_LINK_FIELDS.ACCOUNTS, String(response.TransactionId),
            { 'AccountId': selectedAccount.value }
        )
        resetTransactionForm()
        refreshAccountBalances()

    }

}


</script>


<style>
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
</style>