<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  target?: string
  visibilityHeight?: number
  right?: number
  bottom?: number
}>(), {
  visibilityHeight: 200,
  right: 40,
  bottom: 40
})

const visible = ref(false)

const handleScroll = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  visible.value = scrollTop >= props.visibilityHeight
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition name="neo-backtop-fade">
    <div 
      v-if="visible" 
      class="neo-backtop"
      :style="{ right: right + 'px', bottom: bottom + 'px' }"
      @click="scrollToTop"
    >
      <slot>
        <div class="neo-backtop__inner">
          ↑
        </div>
      </slot>
    </div>
  </Transition>
</template>

<style scoped>
.neo-backtop {
  position: fixed;
  z-index: var(--neo-z-popover);
  cursor: pointer;
}

.neo-backtop__inner {
  width: 50px;
  height: 50px;
  background: var(--neo-primary);
  color: white;
  border: 4px solid black;
  box-shadow: 6px 6px 0px black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 900;
  transition: all 0.2s;
}

.neo-backtop__inner:hover {
  transform: translate(-3px, -3px);
  box-shadow: 10px 10px 0px black;
  background: var(--neo-pink);
}

.neo-backtop-fade-enter-active, .neo-backtop-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.neo-backtop-fade-enter-from, .neo-backtop-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
