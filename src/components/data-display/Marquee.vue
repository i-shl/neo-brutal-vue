<script setup lang="ts">
const props = withDefaults(defineProps<{
  duration?: number
  reverse?: boolean
  pauseOnHover?: boolean
}>(), {
  duration: 15,
  reverse: false,
  pauseOnHover: true
})
</script>

<template>
  <div class="neo-marquee" :style="{ '--marquee-duration': duration + 's' }" :class="{ 'is-hoverable': pauseOnHover }">
    <div class="neo-marquee__content" :class="{ 'is-reverse': reverse }">
      <slot />
      <slot />
    </div>
  </div>
</template>

<style scoped>
.neo-marquee {
  width: 100%;
  overflow: hidden;
  display: flex;
  border-top: var(--neo-border-thick);
  border-bottom: var(--neo-border-thick);
  background-color: var(--neo-main);
  padding: 0.75rem 0;
  box-sizing: border-box;
}

.neo-marquee.is-hoverable:hover .neo-marquee__content {
  animation-play-state: paused;
}

.neo-marquee__content {
  display: flex;
  align-items: center;
  min-width: 200%;
  animation: neo-marquee-scroll var(--marquee-duration) linear infinite;
  gap: 2rem;
  padding-right: 2rem;
}

.neo-marquee__content.is-reverse {
  animation-direction: reverse;
}

@keyframes neo-marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
