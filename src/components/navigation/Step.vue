<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, getCurrentInstance, reactive, toRef } from 'vue'

const props = defineProps<{
  title?: string
  description?: string
  icon?: string
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success'
  index?: number
}>()

const parent = inject<any>('neoSteps', null)
const instance = getCurrentInstance()

const internalStep = reactive({
  uid: instance?.uid,
  ...toRef(props)
})

onMounted(() => {
  parent?.addStep(internalStep)
})

onUnmounted(() => {
  parent?.removeStep(internalStep)
})

const currentIndex = computed(() => {
  if (props.index !== undefined) return props.index
  return parent ? parent.steps.findIndex((step: any) => step.uid === instance?.uid) : -1
})

const computedStatus = computed(() => {
  if (props.status) return props.status
  const active = parent?.props.active ?? 0
  const idx = currentIndex.value
  if (idx < 0) return 'wait'
  if (idx < active) return parent?.props.finishStatus || 'finish'
  if (idx === active) return parent?.props.processStatus || 'process'
  return 'wait'
})

const isVertical = computed(() => parent?.props.direction === 'vertical')

const stepClass = computed(() => {
  const classes: string[] = ['neo-step']
  classes.push(`is-${computedStatus.value}`)
  if (isVertical.value) classes.push('is-vertical')
  return classes.join(' ')
})
</script>

<template>
  <div :class="stepClass">
    <div class="neo-step__bar"></div>
    
    <div class="neo-step__head">
      <div class="neo-step__icon">
        <slot name="icon">
          <span v-if="icon">{{ icon }}</span>
          <span v-else-if="computedStatus === 'finish'">✓</span>
          <span v-else-if="computedStatus === 'error'">✕</span>
          <span v-else>{{ currentIndex + 1 }}</span>
        </slot>
      </div>
    </div>
    
    <div class="neo-step__main">
      <div class="neo-step__title">{{ title }}</div>
      <div v-if="description" class="neo-step__description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.neo-step {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: var(--neo-font-family);
}

/* --- Connecting Line --- */
.neo-step__bar {
  position: absolute;
  background-color: var(--neo-black);
  height: 6px;
  top: 24px;
  left: 50%;
  width: 100%;
  z-index: 0;
  transition: var(--neo-transition);
}

.neo-step:last-of-type .neo-step__bar {
  display: none;
}

/* --- Step Icon --- */
.neo-step__head {
  position: relative;
  z-index: 1;
  margin-bottom: 1rem;
}

.neo-step__icon {
  width: 48px;
  height: 48px;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--neo-font-weight-black);
  font-size: 1.5rem;
  box-shadow: 4px 4px 0px var(--neo-black);
  transition: var(--neo-transition);
}

/* --- Content --- */
.neo-step__main {
  padding: 0 1rem;
  z-index: 1;
}

.neo-step__title {
  font-size: 1rem;
  font-weight: var(--neo-font-weight-black);
  text-transform: uppercase;
  color: var(--neo-black);
  letter-spacing: 0.05em;
  line-height: 1.2;
}

.neo-step__description {
  font-size: 0.8125rem;
  font-weight: var(--neo-font-weight-bold);
  color: var(--neo-gray-500);
  margin-top: 0.5rem;
  line-height: 1.4;
}

/* --- Vertical Variant --- */
.is-vertical {
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
  margin-bottom: 2rem;
  width: 100%;
}

.is-vertical .neo-step__bar {
  width: 6px;
  height: calc(100% + 2rem);
  top: 48px;
  left: 21px;
}

.is-vertical .neo-step__head {
  margin-right: 1.5rem;
  margin-bottom: 0;
}

.is-vertical .neo-step__main {
  padding-top: 6px;
}

/* --- Status Styles --- */
.is-wait .neo-step__icon { 
  background-color: var(--neo-white); 
  color: var(--neo-gray-400); 
  border-color: var(--neo-gray-300);
  box-shadow: none;
}
.is-wait .neo-step__bar { background-color: var(--neo-gray-200); }

.is-process .neo-step__icon { 
  background-color: var(--neo-main); 
  color: var(--neo-black); 
  transform: translate(-3px, -3px) rotate(-3deg);
  box-shadow: 6px 6px 0px var(--neo-black);
}
.is-process .neo-step__title {
  color: var(--neo-black);
}

.is-finish .neo-step__icon { 
  background-color: var(--neo-black); 
  color: var(--neo-main); 
  border-color: var(--neo-black);
}
.is-finish .neo-step__bar { background-color: var(--neo-black); }

.is-error .neo-step__icon { 
  background-color: var(--neo-danger); 
  color: var(--neo-white); 
}
.is-error .neo-step__title { color: var(--neo-danger); }

.is-success .neo-step__icon { 
  background-color: var(--neo-success); 
  color: var(--neo-black); 
}
</style>
