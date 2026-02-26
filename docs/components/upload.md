# Upload

File upload with click and drag support.

## Basic Usage

<demo vue="../demos/upload-basic.vue" />

## Drag Upload

<demo vue="../demos/upload-drag.vue" />

## Multiple & Limit

<demo vue="../demos/upload-multiple.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| action | Upload URL | `string` |
| drag | Whether to enable drag upload | `boolean` |
| multiple | Whether to allow multiple selection | `boolean` |
| accept | Accepted file types | `string` |
| limit | Maximum number of uploads | `number` |

Events: `success`, `error`, `change`, etc.
