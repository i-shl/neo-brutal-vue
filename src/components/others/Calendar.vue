<script setup lang="ts">
import { ref, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue?: Date
    firstDayOfWeek?: 0 | 1
  }>(),
  { firstDayOfWeek: 0 },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: Date): void
}>()

const currentDate = ref(new Date())
const days = computed(() =>
  props.firstDayOfWeek === 1
    ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
)

const monthName = computed(() => {
  return currentDate.value.toLocaleString('default', { month: 'long' })
})

const year = computed(() => currentDate.value.getFullYear())

const prevMonth = () => {
  const d = currentDate.value
  currentDate.value = new Date(d.getFullYear(), d.getMonth() - 1)
}

const nextMonth = () => {
  const d = currentDate.value
  currentDate.value = new Date(d.getFullYear(), d.getMonth() + 1)
}

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  let firstDay = new Date(year, month, 1).getDay()
  if (props.firstDayOfWeek === 1) {
    firstDay = firstDay === 0 ? 6 : firstDay - 1
  }
  const lastDate = new Date(year, month + 1, 0).getDate()

  const result: { date: number | null }[] = []
  for (let i = 0; i < firstDay; i++) {
    result.push({ date: null })
  }
  // Days
  for (let i = 1; i <= lastDate; i++) {
    result.push({ date: i })
  }
  return result
})
const isSelected = (day: number | null) => {
  if (!day || !props.modelValue) return false
  const d = props.modelValue
  return d.getDate() === day && 
         d.getMonth() === currentDate.value.getMonth() && 
         d.getFullYear() === currentDate.value.getFullYear()
}

const handleDateClick = (day: number | null) => {
  if (!day) return
  const newDate = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), day)
  emit('update:modelValue', newDate)
}
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
      <div 
        v-for="(day, idx) in calendarDays" 
        :key="idx" 
        class="neo-calendar-cell"
        :class="{ 
          'neo-calendar-cell--empty': !day.date, 
          'neo-calendar-cell--active': isSelected(day.date) 
        }"
        @click="handleDateClick(day.date)"
      >
        {{ day.date }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.neo-calendar {
  border: var(--neo-border-thick);
  box-shadow: var(--neo-shadow-lg);
  background: var(--neo-white);
  width: 350px;
  overflow: hidden;
  border-radius: var(--neo-radius-sm);
}

.neo-calendar-header {
  padding: 1.25rem;
  background: var(--neo-main);
  color: var(--neo-black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: var(--neo-border-thick);
}

.neo-calendar-title {
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  font-size: 1.125rem;
}

.neo-calendar-title span {
  background: var(--neo-black);
  color: var(--neo-white);
  padding: 2px 8px;
  margin-left: 0.5rem;
  border-radius: 2px;
}

.neo-calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0.5rem;
  gap: 2px;
}

.neo-calendar-day-header {
  padding: 0.75rem 0;
  text-align: center;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-gray-600);
  font-size: 0.75rem;
  text-transform: uppercase;
}

.neo-calendar-cell {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--neo-font-weight-bold);
  font-size: 0.875rem;
  cursor: pointer;
  transition: var(--neo-transition);
  border-radius: var(--neo-radius-sm);
  border: 2px solid transparent;
}

.neo-calendar-cell:hover:not(.neo-calendar-cell--empty) {
  background: var(--neo-gray-100);
  border-color: var(--neo-black);
  transform: translate(-1px, -1px);
  box-shadow: 2px 2px 0px var(--neo-black);
}

.neo-calendar-cell--active {
  background: var(--neo-primary) !important;
  color: var(--neo-white) !important;
  border-color: var(--neo-black) !important;
  box-shadow: 3px 3px 0px var(--neo-black);
  transform: translate(-2px, -2px);
}

.neo-calendar-cell--empty {
  color: var(--neo-gray-300);
  cursor: default;
}
</style>
