# Slider

Drag to select a value within a range. Supports range selection (dual sliders).

## Basic Usage

<demo vue="../demos/slider-basic.vue" />

Use `show-input` to display the value next to the slider.

## Range Selection

<demo vue="../demos/slider-range.vue" />

Use `range` with `show-input` for dual sliders with value display. Disabled state is shown below.

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Bound value (single: number, range: [number, number]) | `number \| [number, number]` |
| min | Minimum value | `number` |
| max | Maximum value | `number` |
| step | Step size | `number` |
| range | Range mode (dual sliders) | `boolean` |
| showInput | Whether to show input | `boolean` |
| showTooltip | Whether to show tooltip on hover | `boolean` |
| disabled | Disabled | `boolean` |
| size | Size | `ComponentSize` |

Events: `update:modelValue`, `change`.
