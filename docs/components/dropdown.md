# Dropdown

Dropdown menu triggered by click or hover.

## Basic Usage

```vue
<template>
  <NeoDropdown>
    <NeoButton>Dropdown <span class="arrow">▼</span></NeoButton>
    <template #dropdown>
      <div class="neo-dropdown-menu">
        <div class="item">Option 1</div>
        <div class="item">Option 2</div>
      </div>
    </template>
  </NeoDropdown>
</template>
```

Refer to component implementation for exact API. Common props: `trigger` (click/hover), `placement`, `disabled`, etc. Slots: default (trigger element), `dropdown` (dropdown content).
