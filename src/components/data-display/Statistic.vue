<script setup lang="ts">
const props = withDefaults(defineProps<{
  title?: string
  value?: string | number
  precision?: number
  prefix?: string
  suffix?: string
  valueStyle?: any
}>(), {
  precision: 0
})
</script>

<template>
  <div class="neo-statistic">
    <div v-if="title || $slots.title" class="neo-statistic__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="neo-statistic__content" :style="valueStyle">
      <span v-if="prefix || $slots.prefix" class="neo-statistic__prefix">
        <slot name="prefix">{{ prefix }}</slot>
      </span>
      <span class="neo-statistic__value">
        {{ typeof value === 'number' ? value.toFixed(precision) : value }}
      </span>
      <span v-if="suffix || $slots.suffix" class="neo-statistic__suffix">
        <slot name="suffix">{{ suffix }}</slot>
      </span>
    </div>
  </div>
</template>

<style scoped>
.neo-statistic {
  font-family: var(--neo-font-family);
  padding: 1.5rem;
  background: white;
  border: 4px solid black;
  box-shadow: 6px 6px 0px black;
  display: inline-block;
  min-width: 151px;
}

.neo-statistic__title {
  font-size: 0.9rem;
  font-weight: 800;
  color: #666;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.neo-statistic__content {
  display: flex;
  align-items: baseline;
  font-size: 2rem;
  font-weight: 900;
  color: black;
}

.neo-statistic__prefix, .neo-statistic__suffix {
  font-size: 1.25rem;
  margin: 0 4px;
}
</style>
