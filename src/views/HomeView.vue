<script setup>
import { ElMessage } from 'element-plus'
import { useCounterStore } from '@/stores/counter'
import { toRefs } from 'vue'
const mOpen = () => {
  ElMessage({
    type: 'success',
    message: 'This is a success message.',
    showClose: true,
  })
}
const counterStore = useCounterStore()
const { count, doubleCount, increment } = toRefs(counterStore)
</script>

<template>
  <div class="flex flex-col items-center gap4">
    <h1 class="text-3xl font900">Hello World</h1>

    <hr class="w-50% border-1 border-black border-dashed" />

    <div class="text-red font700">Sample Text</div>
    <el-button type="primary" class="px4 py2" @click="mOpen">訊息提示</el-button>

    <hr class="w-50% border-1 border-black border-dashed" />

    <div class="flex flex-col items-center gap-2">
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <el-button type="success" @click="increment">Increment</el-button>
    </div>

    <hr class="w-50% border-1 border-black border-dashed" />

    <el-link type="primary" href="\VantView">Vant Demo</el-link>
  </div>
</template>
