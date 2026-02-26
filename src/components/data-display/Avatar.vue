<script setup lang="ts">
import { computed } from 'vue'
import type { AvatarProps } from '@/types'

const props = withDefaults(defineProps<AvatarProps>(), {
  shape: 'square',
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
    <img v-if="src && !error" :src="src" :alt="alt" class="neo-avatar__img" />
    <span v-else-if="icon" class="neo-avatar__inner neo-avatar__icon">{{ icon }}</span>
    <span v-else class="neo-avatar__inner neo-avatar__text">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.neo-avatar {
  --avatar-size: 3rem;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--avatar-size);
  height: var(--avatar-size);
  font-size: calc(var(--avatar-size) * 0.4);
  font-weight: var(--neo-font-weight-black);
  color: var(--neo-black);
  background-color: var(--neo-main);
  border: var(--neo-border-thick);
  box-shadow: 3px 3px 0px var(--neo-black);
  overflow: hidden;
  flex-shrink: 0;
  transition: var(--neo-transition);
  position: relative;
}

.neo-avatar:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0px var(--neo-black);
}

.neo-avatar--circle {
  border-radius: 50%;
}

.neo-avatar--square {
  border-radius: 4px;
}

.neo-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.neo-avatar__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  background-color: var(--neo-main);
}

.neo-avatar--error {
  background-color: var(--neo-danger);
  color: var(--neo-white);
}

/* Sizes */
.neo-avatar--xs { --avatar-size: 1.5rem; border-width: 2px; box-shadow: 2px 2px 0 var(--neo-black); }
.neo-avatar--sm { --avatar-size: 2.25rem; border-width: 2px; box-shadow: 2px 2px 0 var(--neo-black); }
.neo-avatar--md { --avatar-size: 3rem; }
.neo-avatar--lg { --avatar-size: 4.5rem; }
.neo-avatar--xl { --avatar-size: 6rem; border-width: 4px; box-shadow: 6px 6px 0 var(--neo-black); }
</style>
