# Tour 漫游式引导

Used to guide users through the features of an application step by step.

## Basic Usage

<demo vue="../demos/tour-basic.vue" />

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| modelValue | Whether to show the tour | `boolean` | `false` |
| steps | Steps of the tour | `TourStep[]` | `[]` |
| current | Current step index | `number` | `0` |

### TourStep

| Property | Description | Type |
|----------|-------------|------|
| target | Target element selector or function | `string \| (() => HTMLElement)` |
| title | Title of the step | `string` |
| description | Description of the step | `string` |
| placement | Placement of the popover | `'top' \| 'bottom' \| 'left' \| 'right'` |

## Events

| Event | Description |
|-------|-------------|
| update:modelValue | Emitted when visibility changes |
| update:current | Emitted when current step changes |
| close | Emitted when tour is closed |
| finish | Emitted when tour is finished |
