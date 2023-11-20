<script setup>
import { ref } from 'vue'
const currentDate = ref(['2021', '01', '01'])
let minDate = new Date(2020, 0, 1)
let maxDate = new Date(2025, 5, 1)
</script>

<template>
  <van-date-picker v-model="currentDate" title="選擇日期" :min-date="minDate" :max-date="maxDate" />
</template>
