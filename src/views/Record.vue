<template>
  <div>
    <h1>记账</h1>
    <div>
      <label for="type">类型:</label>
      <select id="type" v-model="type">
        <option value="income">收入</option>
        <option value="expense">支出</option>
      </select>
    </div>
    <div>
      <label for="amount">金额:</label>
      <input id="amount" type="number" v-model.number="amount" />
    </div>
    <button @click="addRecord">添加记录</button>
    <ul>
      <li v-for="record in records" :key="record.id">
        {{ record.type }}: {{ record.amount }}
        <button @click="deleteRecord(record.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRecordStore } from '../stores/record'

const type = ref<'income' | 'expense'>('income')
const amount = ref(0)

const recordStore = useRecordStore()
const { records } = storeToRefs(recordStore)

const addRecord = () => {
  recordStore.records.push({
    id: Date.now(),
    type: type.value,
    amount: amount.value
  })
  amount.value = 0
}

const deleteRecord = (id: number) => {
  const index = recordStore.records.findIndex((r) => r.id === id)
  if (index !== -1) {
    recordStore.records.splice(index, 1)
  }
}

onMounted(() => {
  // 在这里可以执行一些初始化操作,如从服务器加载数据
})
</script>
