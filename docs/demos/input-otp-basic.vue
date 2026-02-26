<template>
  <div class="neo-demo-vertical">
    <div style="font-weight: 900; margin-bottom: 8px;">Enter Verification Code:</div>
    <NeoInputOTP v-model="otpValue" :length="6" @complete="handleComplete" />
    <div v-if="otpValue" style="margin-top: 1rem; color: var(--neo-gray-500);">Current value: {{ otpValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoInputOTP } from 'neo-brutal-vue'

const otpValue = ref('')

const handleComplete = (val: string) => {
  alert('OTP Entered: ' + val)
}
</script>
