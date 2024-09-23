<script lang="ts" setup>
import { ref } from 'vue';
import PieChart from '@/components/charts/PieChart.vue'
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'vue-chart-3';
import { useQuery } from '@tanstack/vue-query';

// ChartJS.register(ArcElement, Tooltip, Legend);
import { useAccountsData } from '@/composables/useAccountsData'
const { normalizedAccounts } = useAccountsData()
const { $dayjs } = useNuxtApp()

// Модальное окно выбора счета
const dialog = ref(false);

// Выбранный счет и общая сумма

// Табы для фильтра типа транзакций
const transactionType = ref('Expense');
const transactionTypes = ['Expense', 'Income'];

// Табы для фильтра даты
const selectedDateFilterId = ref('week');
const dateFilters = [
  {
    label: 'День',
    id: 'day',
    period: {
      start: $dayjs().startOf('day').format('YYYY-MM-DD'),
      end: $dayjs().endOf('day').format('YYYY-MM-DD')
    }
  }, {
    label: 'Неделя',
    id: 'week',
    period: {
      start: $dayjs().startOf('isoWeek').format('YYYY-MM-DD'),
      end: $dayjs().endOf('isoWeek').format('YYYY-MM-DD')
    }
  }, {
    label: 'Месяц',
    id: 'month',
    period: {
      start: $dayjs().startOf('month').format('YYYY-MM-DD'),
      end: $dayjs().endOf('month').format('YYYY-MM-DD')
    }
  }];

const selectedDateFilter = computed(() => {
  return dateFilters.find(el => el.id === selectedDateFilterId.value)!
})

// Текущий месяц и год
const currentFormatedRange = computed(() => {
  if (selectedDateFilter.value.id === 'day') return $dayjs(selectedDateFilter.value.period.start).format('D MMMM')
  if (selectedDateFilter.value.id === 'week') {
    return $dayjs(selectedDateFilter.value.period.start).format('D MMM') + ' - ' + $dayjs(selectedDateFilter.value.period.end).format('D MMM')
  }
  if (selectedDateFilter.value.id === 'month') {
    return $dayjs(selectedDateFilter.value.period.start).format('MMMM YYYY')
  }
})



const {
  data: totalSumm,
} = useQuery({
  queryKey: ["categs-transactions-summ", selectedDateFilter],
  queryFn: () =>
    $fetch("/api/analytics/total-sum", {
      method: "GET",
      server: false,
    }),
});

const accountsOptions = computed(() => {
  const newArr = normalizedAccounts.value.map(el => ({
    id: String(el.account_id),
    label: el.account_name,
    summ: el.balance
  }))
  newArr.unshift({ id: 'all', label: 'Итого', summ: totalSumm.value?.totalSumm })
  return newArr
})
const selectedAccount = computed(() => accountsOptions.value.find(el => el.id === selectedAccountId.value)!)


const selectedAccountId = ref(accountsOptions.value[0].id);

const {
  data: expenseData,
} = useQuery({
  queryKey: ["categs-transactions", selectedDateFilter, selectedAccountId, transactionType],
  queryFn: () =>
    $fetch("/api/analytics/categs-transactions", {
      method: "GET",
      server: false,
      query: {
        startDate: selectedDateFilter.value.period.start,
        endDate: selectedDateFilter.value.period.end,
        transactionType: transactionType.value,
        accountId: selectedAccountId.value === 'all' ? undefined : selectedAccountId.value
      }

    }),
});


const { deleteTransaction } = useDeleteTransaction()



const onDeleteTransaction = (transactionId: number) => {
  deleteTransaction(transactionId)
}
// Конфигурация для Pie Chart
// const chartData = {
//   labels: expenseData.value.map((expense) => expense.category_name),
//   datasets: [
//     {
//       data: expenseData.value.map((expense) => expense.category_percent),
//       backgroundColor: ['#4CAF50', '#F44336', '#FFEB3B', '#2196F3'],
//       hoverBackgroundColor: ['#66BB6A', '#E57373', '#FFF176', '#64B5F6'],
//     },
//   ],
// };

const chartSeries = computed(() => {
  if (!expenseData.value) return null
  return {
    series: expenseData.value.map(el => +el.category_sum),
    labels: expenseData.value.map(el => el.category_name)
  }



})
</script>

<template>
  <!-- Выбор счета -->
  <v-dialog v-model="dialog" max-width="400">
    <v-card>
      <v-card-title>Выберите счет</v-card-title>
      <v-card-text>
        <v-radio-group v-model="selectedAccountId">
          <v-radio v-for="account in accountsOptions" :key="account.id" :value="account.id">

            <template v-slot:label>
              <div class="w-100 d-flex justify-space-between">
                <div>
                  {{ account.label }}
                </div>
                <div>
                  {{ account.summ }}
                </div>
              </div>


            </template>


          </v-radio>

        </v-radio-group>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="dialog = false">Закрыть</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Основной интерфейс -->
  <div class="p-4">
    <!-- Счет -->
    <div class="flex justify-between items-center mb-4">
      <div @click="dialog = true" class="text-lg cursor-pointer">
        {{ selectedAccount.label }}: {{ selectedAccount.summ }} ₽
      </div>
    </div>

    <!-- Переключатель Расходы / Доходы -->
    <v-tabs grow v-model="transactionType" background-color="primary" class="mb-4">
      <v-tab :value="type" v-for="type in transactionTypes" :key="type">
        {{ type === 'Expense' ? 'Расходы' : 'Доходы' }}
      </v-tab>
    </v-tabs>

    <!-- Переключатель День / Неделя / Месяц / Год / Период -->
    <v-tabs grow v-model="selectedDateFilterId" background-color="secondary" class="mb-4">
      <v-tab :value="filter.id" v-for="filter in dateFilters" :key="filter.id">{{ filter.label }}</v-tab>
    </v-tabs>

    <!-- Текущий месяц и год -->
    <div class="text-h6 text-center">{{ currentFormatedRange }}</div>
    <div class="m-auto">
      <PieChart v-if="chartSeries" :series="chartSeries.series" :labels="chartSeries.labels"></PieChart>

    </div>

    <!-- Pie График -->
    <!-- <Pie :data="chartData" class="mb-6" /> -->

    <!-- Список трат по категориям -->
    <v-list>

      <v-bottom-sheet v-for="expense in expenseData" :key="expense.category_id">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" class="d-flex justify-between">
            <v-list-item-title>{{ expense.category_name }}</v-list-item-title>
            <v-list-item-subtitle>{{ expense.category_percent }}% ({{ expense.category_sum }} ₽)</v-list-item-subtitle>
          </v-list-item>
        </template>

        <v-card :title="expense.category_name">

          <v-list lines="two">
            <v-list-item v-for="transaction in expense.transactions" :key="expense.category_id"
              :title="transaction.amount" :subtitle="$dayjs(transaction.transaction_date).format('DD.MM.YYYY')">

              <template v-slot:append>
                <v-btn @click="onDeleteTransaction(transaction.transaction_id)" icon="mdi-delete"
                  variant="text"></v-btn>
              </template>
            </v-list-item>
          </v-list>


          <!-- <v-list-item v-for="transacrion in expense.transactions" :key="expense.category_id"
            class="d-flex justify-between">
            <v-list-item-title>{{ transacrion.amount }}</v-list-item-title>
          </v-list-item> -->
          <!-- <v-list-item-subtitle>{{ expense.category_percent }}% ({{ expense.category_sum }} ₽)</v-list-item-subtitle> -->

        </v-card>
      </v-bottom-sheet>



    </v-list>


    <!-- <v-bottom-sheet>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" text="Click Me"></v-btn>
      </template>

      <v-card title="Bottom Sheet"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!">
      </v-card>
    </v-bottom-sheet> -->
  </div>
</template>

<style scoped>
:deep(.v-label) {
  width: 100%;
}


.cursor-pointer {
  cursor: pointer;
}
</style>
