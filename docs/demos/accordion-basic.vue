<template>
  <div class="neo-demo-block">
    <NeoAccordion v-model="active" accordion>
      <NeoAccordionItem name="a" title="Item A">
        Accordion content A. Only one item can be expanded at a time.
      </NeoAccordionItem>
      <NeoAccordionItem name="b" title="Item B">
        Accordion content B. Click to expand or collapse.
      </NeoAccordionItem>
      <NeoAccordionItem name="c" title="Item C">
        Accordion content C. Clean and organized layout.
      </NeoAccordionItem>
    </NeoAccordion>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NeoAccordion, NeoAccordionItem } from 'neo-brutal-vue'

const active = ref('a')
</script>
