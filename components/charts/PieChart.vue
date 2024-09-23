<script setup lang="ts">




const props = defineProps<{
  series: number[],
  labels: string[]
}>()


const chartOptions = computed(() => {
  return {
    chart: {
      id: 'vuechart-example',
    },
    labels: props.labels,
  }
});
</script>

<template>
  <div class="d-flex justify-center">
    <apexchart width="400" type="donut" :options="chartOptions" :series="series"></apexchart>

  </div>
</template>