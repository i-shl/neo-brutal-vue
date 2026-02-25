<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  modelValue?: Date
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Date): void
}>()

const currentDate = ref(new Date())
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const monthName = computed(() => {
  return currentDate.value.toLocaleString('default', { month: 'long' })
})

const year = computed(() => currentDate.value.getFullYear())

const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() - 1))
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() + 1))
}

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const lastDate = new Date(year, month + 1, 0).getDate()
  
  const result = []
  // Padding
  for (let i = 0; i < firstDay; i++) {
    result.push({ date: null })
  }
  // Days
  for (let i = 1; i <= lastDate; i++) {
    result.push({ date: i })
  }
  return result
})
</script>

<template>
  <div class="neo-calendar">
    <div class="neo-calendar-header">
      <NeoButton size="sm" type="neo" @click="prevMonth">&lt;</NeoButton>
      <div class="neo-calendar-title">
        {{ monthName }} <span>{{ year }}</span>
      </div>
      <NeoButton size="sm" type="neo" @click="nextMonth">&gt;</NeoButton>
    </div>
    <div class="neo-calendar-grid">
      <div v-for="day in days" :key="day" class="neo-calendar-day-header">{{ day }}</div>
      <div v-for="(day, idx) in calendarDays" :key="idx" 
           class="neo-calendar-cell"
           :class="{ 'neo-calendar-cell--empty': !day.date, 'neo-calendar-cell--active': day.date === 15 }">
        {{ day.date }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-calendar {
  border: 4px solid black;
  box-shadow: 8px 8px 0px black;
  background: white;
  width: 350px;
  overflow: hidden;
}

.neo-calendar-header {
  padding: 1rem;
  background: var(--neo-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 4px solid black;
}

.neo-calendar-title {
  font-weight: 900;
  text-transform: uppercase;
}
.neo-calendar-title span {
  background: black;
  padding: 2px 5px;
  margin-left: 5px;
}

.neo-calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.neo-calendar-day-header {
  padding: 0.5rem;
  text-align: center;
  font-weight: 800;
  border-bottom: 2px solid black;
  background: var(--neo-yellow);
}

.neo-calendar-cell {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.1s;
}

.neo-calendar-cell:hover:not(.neo-calendar-cell--empty) {
  background: var(--neo-cyan);
  border: 2px solid black;
  z-index: 1;
}

.neo-calendar-cell--active {
  background: var(--neo-pink);
  color: white;
  border: 2px solid black !important;
}

.neo-calendar-cell--empty {
  background: var(--neo-gray-100);
}
</style>
