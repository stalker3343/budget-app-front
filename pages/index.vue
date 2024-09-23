<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <VBtn :loading="isPendinguploadImageMutate" @click="uploadImage">Загрузить</VBtn>

    <AccountsList v-model="selectedAccount"></AccountsList>
    <input style="font-size: 18px;" class="mb-2" type="date" v-model="selectedDate">


    <div v-if="initParsedResults" class="spending-list">
      <div v-for="(spending, index) in normalizedParsedResults" :key="index" class="card" :class="spending.type">
        <!-- Status Indicator -->
        <div class="status-indicator" :class="spending.status === 'completed' ? 'status-green' : 'status-red'"></div>
        <div v-if="spending.cashback" class="cashback-indicator">
          <span>+ {{ spending.cashback }}Б</span>
        </div>
        <!-- Content for Expense Type -->
        <div v-if="spending.type === 'expense'">
          <div class="details">
            <div class="text-h6">
              <span>{{ spending.source }}</span>
            </div>
            <div class="d-flex">
              <input type="number" v-model.number="spending.amount" class="amount-input" />
              <div class="ml-2 text-h6">₽</div>
            </div>


            <div>
              <label>Категория</label>
              <select v-model="spending.selectedCateg" class="category-select">
                <option v-for="category in normalizedCategs" :key="category.value" :value="category.value">
                  {{ category.label }}
                </option>
              </select>
            </div>
            <div class="text-caption">
              <span>{{ spending.category }}</span>
            </div>
          </div>

          <div class="card-buttons">
            <VBtn :loading="createTransactionIsPending" class="save-btn" @click="saveTransaction(spending)">
              Сохранить
            </VBtn>
            <!-- <button class="delete-btn" @click="deleteSpending(index)">Delete</button> -->
          </div>
        </div>

        <!-- Content for Income Type -->
        <div v-else-if="spending.type === 'income'">
          <TransferForm :transfer-date="selectedDate" :fromAccountId="selectedAccount" :record="spending">
          </TransferForm>
        </div>

        <!-- Save and Delete Buttons -->

      </div>
    </div>



  </div>







</template>

<script setup lang="ts">
import { useMutation, useQueries, useQuery } from '@tanstack/vue-query'



import { ALIAS_TYPE, BANKS, CATEGORIES_TYPE, TRANSACTION_TYPES, type Account, type BankRecordCateged, type Category } from '~/server/types';
import type { BankRecordWithSelectedCateg } from '~/types';



const selectedAccount = ref("");
const selectedDate = ref(new Date().toLocaleDateString(undefined, { year: 'numeric', day: 'numeric', month: 'numeric' }).split('.').reverse().join('-'))
const file = ref<File | null>(null);
const initParsedResults = ref<BankRecordCateged[] | null>([]);


const normalizedParsedResults = computed(() => {
  if (!initParsedResults.value) return null
  return initParsedResults.value.map(el => ({ ...el, selectedCateg: el.predictCateg }))
})


const { data: categoriesData } = await useFetch('/api/query', {
  method: 'POST',
  body: { query: 'Select * FROM categories' },
  server: false
});





const normalizedCategs = computed(() => {
  if (!categoriesData.value?.data) return []
  return categoriesData.value.data.map(el => ({ value: el.category_id, label: el.category_name }))
})

/*
  query: `
        INSERT INTO category_aliases (alias_bank, alias_type, alias_name, category_id)
                             VALUES ('${BANKS.GPB}', '${ALIAS_TYPE.name}', '${record.source}', '${record.selectedCateg}')`

*/
const { mutate: addAliasMutation, reset } = useMutation({
  mutationFn: async (record: BankRecordWithSelectedCateg) => $fetch('/api/category_aliases/list', {
    method: 'POST',
    body: {
      alias_bank: BANKS.GPB,
      alias_name: record.source,
      alias_type: ALIAS_TYPE.name,
      category_id: record.selectedCateg,
    },
  })
  ,
  onSuccess: () => {
    useNuxtApp().$toast.success("Алиас для успешно создан", {
      autoClose: 1000,
    });
  },
  onSettled: () => {
    setTimeout(() => {
      reset();
    }, 1000);
  },
});

// ${selectedAccount.value}, '${record.selectedCateg}', ${null}, '${CATEGORIES_TYPE.Expense}', ${record.amount}, '${selectedDate.value}', ${null}, ${record.cashback});


const { mutate: addTransactionMutation, reset: resetAddTransaction, isPending: createTransactionIsPending } = useMutation({
  mutationFn: async (record: BankRecordWithSelectedCateg) => $fetch('/api/transactions/list', {
    method: 'POST',
    body: {
      amount: record.amount,
      account_id: selectedAccount.value,
      transaction_type: CATEGORIES_TYPE.Expense,
      transaction_date: selectedDate.value,
      category_id: record.selectedCateg,
      cashback: record.cashback,
      notes: '',
    },

  }),
  onSuccess: () => {
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



const saveTransaction = async (record: BankRecordWithSelectedCateg) => {
  if (record.selectedCateg !== record.predictCateg) {
    addAliasMutation(record)
  }
  if (!selectedAccount.value) {
    alert('Выберете аккаунт')
    return
  }
  addTransactionMutation(record)
}


const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    file.value = target.files[0];
  }
};



const {
  mutateAsync: uploadImageMutate,
  isPending: isPendinguploadImageMutate,
} = useMutation({
  mutationFn: async (formData: FormData) => {
    const result = await $fetch('/api/image', {
      method: 'POST',
      body: formData,
    });
    return result
  },
  onSettled: () => {
    setTimeout(() => {
      reset();
    }, 1000);
  },
});



const uploadImage = async () => {
  if (!file.value) return;
  const formData = new FormData();
  formData.append('image', file.value);
  const resp = await uploadImageMutate(formData)
  initParsedResults.value = resp.data || [];

};
</script>


<style scoped>
.spending-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card {
  position: relative;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}

.card.income {
  background-color: #e6f7ff;
}

.card.expense {
  background-color: #fff1f0;
}

.status-indicator {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.cashback-indicator {
  position: absolute;
  top: 10px;
  right: 10px;

}

.status-green {
  background-color: green;
}

.status-red {
  background-color: red;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}



.category-select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.card-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.save-btn,
.delete-btn {
  width: 48%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.save-btn {
  background-color: #4caf50;
  color: white;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}
</style>
