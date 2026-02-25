# Steps

Step indicator to guide users through a task.

## Basic Usage

```vue
<template>
  <NeoSteps :active="1">
    <NeoStep title="Step 1" description="Description 1" />
    <NeoStep title="Step 2" description="Description 2" />
    <NeoStep title="Step 3" description="Description 3" />
  </NeoSteps>
</template>
```

## Vertical & Alignment

```vue
<template>
  <NeoSteps :active="2" direction="vertical">
    <NeoStep title="A" />
    <NeoStep title="B" />
  </NeoSteps>
</template>
```

## API

**NeoSteps**

| Prop | Description | Type |
|------|-------------|------|
| active | Current step (0-based) | `number` |
| direction | Direction | `'horizontal' \| 'vertical'` |
| space | Spacing | `number \| string` |
| processStatus | In-progress status | `string` |
| finishStatus | Finished status | `string` |
| alignCenter | Whether title is centered | `boolean` |

**NeoStep**

| Prop | Description | Type |
|------|-------------|------|
| title | Title | `string` |
| description | Description | `string` |
| icon | Icon | `string` |
| status | Status | `'wait' \| 'process' \| 'finish' \| 'error' \| 'success'` |
