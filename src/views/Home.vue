<template>
  <div>
    <h1>首页</h1>
    <p>当月收支概览:</p>
    <ul>
      <li>收入: {{ income }}</li>
      <li>支出：{{ expense }}</li>
      <li>余额：{{ balance }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRecordStore } from '../stores/record'

const recordStore = useRecordStore()

const { income, expense, balance } = storeToRefs(recordStore)
</script>
