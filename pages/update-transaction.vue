<template>



  <!-- Input to enter the SQL query -->
  <textarea v-model="query" placeholder="Write your SQL query here" rows="4" cols="50"></textarea>

  <!-- Button to execute the query -->
  <VBtn color="primary" block @click="executeQuery">Выполнить запрос</VBtn>

  <!-- Display the query result -->
  <div v-if="data">
    <h2>Query Result:</h2>
    <pre>{{ data }}</pre>
  </div>

  <!-- Display any errors -->
  <div v-if="error">
    <h2>Error:</h2>
    <pre>{{ error.message }}</pre>
  </div>


  <input type="file" @change="handleFileChange" />
  <button @click="uploadImage">Upload Image</button>
  <pre>{{ initParsedResults }}</pre>

  <div class="" v-if="initParsedResults">
    <div v-for="record in initParsedResults.data">
      {{ record.status }}
      {{ record.source }}
      {{ record.amount }}
      {{ record.type }}
      {{ record.cashback }}
    </div>

    <!-- <p>Extracted Text:</p> -->

    <VBtn @click="onSaveTransactions">Сохранить</VBtn>
    <!-- <pre>{{ initParsedResults }}</pre> -->
  </div>







</template>

<script setup lang="ts">
import { TRANSACTION_TYPES } from '~/consts';

const { $apiService } = useNuxtApp();

interface BankRecord {
  source: string;
  amount: number;
  category: string;
  type: "income" | "expense";
  status?: "completed" | "failed";
  cashback: number | null;
}

// State for the SQL query and the result
const query = ref<string>('SELECT * FROM transactions');
const data = ref<{}>(null);
const error = ref<Error | null>(null);
const executeQuery = async () => {
  try {
    // Use the useFetch function to send a POST request
    const response = await useFetch('/api/query', {
      method: 'POST',
      body: { query: query.value },
    });

    // Assign the response to data if successful
    data.value = response.data.value;
    error.value = null; // Clear any previous error
  } catch (err: any) {
    // Capture and display any errors
    error.value = err;
    data.value = null;
  }


}

const file = ref<File | null>(null);
const initParsedResults = ref<{ success: boolean, data: BankRecord[] } | null>(null);


const onSaveTransactions = async () => {
  if (!initParsedResults.value) return
  await Promise.all(initParsedResults.value.data.map(el => createTransaction(el)));
}
const createTransaction = async (record: BankRecord) => {
  const response = await $apiService.v1.transactionsCreate(
    {
      Amount: record.amount,
      Notes: "",
      TransactionDate: new Date().toLocaleDateString(undefined, { year: 'numeric', day: 'numeric', month: 'numeric' }).split('.').reverse().join('-'),
      TransactionType: record.type === 'expense' ? TRANSACTION_TYPES.EXPENSE : TRANSACTION_TYPES.INCOME,
    }
  )

  if (response && response.TransactionId) {
    await $apiService.v1.transactionsNestedLink(TRANSACTION_LINK_FIELDS.CATEGORIES, String(response.TransactionId),
      { 'CategoryId': selectedTransactionCateg.value }
    )
    await $apiService.v1.transactionsNestedLink(TRANSACTION_LINK_FIELDS.ACCOUNTS, String(response.TransactionId),
      { 'AccountId': selectedAccount.value }
    )


  }

}


const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    file.value = target.files[0];
  }
};

const uploadImage = async () => {
  if (!file.value) return;

  const formData = new FormData();
  formData.append('image', file.value);

  try {
    const { data } = await useFetch('/api/image', {
      method: 'POST',
      body: formData,
    });
    initParsedResults.value = data.value.data || 'No text found';
  } catch (error) {
    initParsedResults.value = 'Error uploading image';
  }
};
</script>
