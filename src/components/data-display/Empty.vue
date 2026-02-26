<script setup lang="ts">
import { computed } from 'vue'

import type { SemanticType } from '@/types'

const props = withDefaults(
  defineProps<{
    description?: string
    image?: string
    showImage?: boolean
    type?: SemanticType
  }>(),
  { 
    showImage: true,
    description: 'No Data',
    type: 'default'
  },
)

const placeholderClass = computed(() => {
  if (props.type && props.type !== 'default') {
    return `neo-empty__placeholder neo-empty__placeholder--${props.type}`
  }
  return 'neo-empty__placeholder'
})
</script>

<template>
  <div class="neo-empty">
    <div v-if="showImage" class="neo-empty__image-container">
      <slot name="image">
        <img v-if="image" :src="image" alt="empty" class="neo-empty__img" />
        <div v-else :class="placeholderClass">
          <span class="neo-empty__icon">📭</span>
        </div>
      </slot>
    </div>
    <div class="neo-empty__description">
      <slot>{{ description }}</slot>
    </div>
    <div v-if="$slots.footer" class="neo-empty__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.neo-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  width: 100%;
}

.neo-empty__image-container {
  margin-bottom: 2rem;
  perspective: 1000px;
}

.neo-empty__img {
  max-width: 160px;
  max-height: 160px;
  filter: drop-shadow(8px 8px 0 var(--neo-black));
}

.neo-empty__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: var(--neo-white);
  border: var(--neo-border-thick);
  box-shadow: 8px 8px 0 var(--neo-black);
  transform: rotate(-3deg);
}

.neo-empty__placeholder--primary { background-color: color-mix(in srgb, var(--neo-primary) 20%, white); }
.neo-empty__placeholder--success { background-color: color-mix(in srgb, var(--neo-success) 20%, white); }
.neo-empty__placeholder--warning { background-color: color-mix(in srgb, var(--neo-warning) 20%, white); }
.neo-empty__placeholder--danger { background-color: color-mix(in srgb, var(--neo-danger) 20%, white); }
.neo-empty__placeholder--info { background-color: color-mix(in srgb, var(--neo-info) 20%, white); }

.neo-empty__icon {
  font-size: 4rem;
}

.neo-empty__description {
  font-size: 1.25rem;
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.neo-empty__footer {
  margin-top: 1rem;
}
</style>
