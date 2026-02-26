# Steps

Step indicator to guide users through a task.

## Basic Usage

<demo vue="../demos/steps-basic.vue" />

## Vertical & Alignment

<demo vue="../demos/steps-vertical.vue" />

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
