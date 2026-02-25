# Select

Dropdown select with single/multiple selection and search.

## Basic Usage

```vue
<template>
  <NeoSelect
    v-model="value"
    :options="options"
    placeholder="Select"
  />
</template>

<script setup lang="ts">
const value = ref('')
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
]
</script>
```

## Multiple

```vue
<template>
  <NeoSelect v-model="values" :options="options" multiple placeholder="Multiple" />
</template>

<script setup lang="ts">
const values = ref<string[]>([])
</script>
```

## Filterable

```vue
<template>
  <NeoSelect v-model="value" :options="options" filterable placeholder="Search" />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Bound value (single or array) | `string \| number \| boolean \| array` |
| options | Options | `SelectOption[]` |
| multiple | Multiple selection | `boolean` |
| filterable | Searchable | `boolean` |
| placeholder | Placeholder | `string` |
| clearable | Clearable | `boolean` |
| disabled | Disabled | `boolean` |
| size | Size | `ComponentSize` |

Events: `update:modelValue`, `change`, `clear`.
