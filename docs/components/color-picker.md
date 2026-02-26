# ColorPicker 颜色选择器

Used to pick a color.

## Basic Usage

<demo vue="../demos/color-picker-basic.vue" />

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| modelValue | Selected color value | `string` | - |
| disabled | Whether disabled | `boolean` | `false` |
| size | Size of the picker | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` |

## Events

| Event | Description |
|-------|-------------|
| update:modelValue | Emitted when color changes |
| change | Emitted when color changes |
