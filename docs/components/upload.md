# Upload

File upload with click and drag support.

## Basic Usage

<demo vue="../demos/upload-basic.vue" />

## Drag Upload

<demo vue="../demos/upload-drag.vue" />

## Custom Icon & Text (Drag)

Support custom icon (image URL or SVG string) and text for the drag area.

<demo vue="../demos/upload-drag-custom.vue" />

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
| dragIcon | Drag area icon: image URL or SVG string | `string` |
| dragText | Drag area main text | `string` |
| dragTextLink | Drag area link text (e.g. "click to upload") | `string` |

### Slots

| Slot | Description |
|------|-------------|
| drag-icon | Custom icon content (overrides `dragIcon` prop) |
| drag-text | Custom text content (overrides `dragText` / `dragTextLink` props) |

Events: `success`, `error`, `change`, etc.
