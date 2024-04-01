import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecordStore = defineStore('record', () => {
  const records = ref<{ id: number; type: 'income' | 'expense'; amount: number }[]>([])

  const income = computed(() =>
    records.value.filter((r) => r.type === 'income').reduce((sum, r) => sum + r.amount, 0)
  )
  const expense = computed(() =>
    records.value.filter((r) => r.type === 'expense').reduce((sum, r) => sum + r.amount, 0)
  )
  const balance = computed(() => income.value - expense.value)

  return { records, income, expense, balance }
})
