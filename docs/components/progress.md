# Progress

Display progress percentage.

## Basic Usage

<demo vue="../demos/progress-basic.vue" />

## Status & Inner Text

<demo vue="../demos/progress-status.vue" />

## Custom Color

<demo vue="../demos/progress-color.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| percentage | Progress 0–100 | `number` |
| status | Status | `'success' \| 'warning' \| 'exception'` |
| strokeWidth | Stroke width | `number` |
| showText | Whether to show text | `boolean` |
| textInside | Whether text is inside bar | `boolean` |
| color | Progress bar color | `string \| string[]` |
| format | Custom text formatter | `(p: number) => string` |
