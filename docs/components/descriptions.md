# Descriptions

Display information in key-value pairs.

## Basic Usage

```vue
<template>
  <NeoDescriptions title="User Info">
    <NeoDescriptionsItem label="Name">John Doe</NeoDescriptionsItem>
    <NeoDescriptionsItem label="Phone">138****0000</NeoDescriptionsItem>
    <NeoDescriptionsItem label="Address" :span="2">Beijing Chaoyang District</NeoDescriptionsItem>
  </NeoDescriptions>
</template>
```

## Border & Columns

```vue
<template>
  <NeoDescriptions :column="2" border>
    <NeoDescriptionsItem label="A">1</NeoDescriptionsItem>
    <NeoDescriptionsItem label="B">2</NeoDescriptionsItem>
  </NeoDescriptions>
</template>
```

## API

**NeoDescriptions**

| Prop | Description | Type |
|------|-------------|------|
| title | Title | `string` |
| column | Number of columns | `number` |
| border | Whether to show border | `boolean` |
| direction | Layout direction | `'horizontal' \| 'vertical'` |

**NeoDescriptionsItem**

| Prop | Description | Type |
|------|-------------|------|
| label | Label | `string` |
| span | Column span | `number` |
