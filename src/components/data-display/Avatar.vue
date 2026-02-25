<script setup lang="ts">
import { computed } from 'vue'
import type { AvatarProps } from '@/types'

const props = withDefaults(defineProps<AvatarProps>(), {
  shape: 'circle',
  size: 'md'
})

const avatarClass = computed(() => {
  const classes: string[] = ['neo-avatar']
  
  classes.push(`neo-avatar--${props.shape}`)
  
  if (typeof props.size === 'string') {
    classes.push(`neo-avatar--${props.size}`)
  }
  
  if (props.error) classes.push('neo-avatar--error')
  
  return classes.join(' ')
})

const avatarStyle = computed(() => {
  if (typeof props.size === 'number') {
    return {
      width: `${props.size}px`,
      height: `${props.size}px`,
      fontSize: `${props.size / 2}px`
    }
  }
  return {}
})
</script>

<template>
  <div :class="avatarClass" :style="avatarStyle">
    <img v-if="src && !error" :src="src" :alt="alt" class="neo-avatar__img" @error="() => {}" />
    <span v-else-if="icon" class="neo-avatar__icon">{{ icon }}</span>
    <span v-else class="neo-avatar__text">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<style scoped>
.neo-avatar {
  --avatar-size: 40px;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--avatar-size);
  height: var(--avatar-size);
  font-size: calc(var(--avatar-size) * 0.4);
  font-weight: var(--neo-font-weight-semibold);
  color: var(--neo-white);
  background-color: var(--neo-primary);
  border: var(--neo-border-width-thin) solid var(--neo-border-color);
  box-shadow: var(--neo-shadow-sm);
  overflow: hidden;
  flex-shrink: 0;
}

.neo-avatar--circle {
  border-radius: 50%;
}

.neo-avatar--square {
  border-radius: var(--neo-radius);
}

.neo-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.neo-avatar__icon {
  font-size: inherit;
}

.neo-avatar__text {
  font-size: inherit;
}

/* Sizes */
.neo-avatar--xs { --avatar-size: 24px; }
.neo-avatar--sm { --avatar-size: 32px; }
.neo-avatar--md { --avatar-size: 40px; }
.neo-avatar--lg { --avatar-size: 56px; }
.neo-avatar--xl { --avatar-size: 72px; }

/* Error state */
.neo-avatar--error {
  background-color: var(--neo-gray-300);
}
</style>
