<template>

  <v-item-group class="mb-3 accounts-list" v-model="model" selected-class="bg-primary">
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
  </v-item-group>

</template>

<script setup lang="ts">

import { useAccountsData } from '@/composables/useAccountsData'


const model = defineModel()

const { accountBalances, accounts, normalizedAccounts } = useAccountsData()

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

.accounts-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  column-gap: 20px;
}
</style>