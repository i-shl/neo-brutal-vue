# Drawer

Panel that slides in from the screen side. Often used for forms or details.

## Basic Usage

<demo vue="../demos/drawer-basic.vue" />

## Direction & Size

<demo vue="../demos/drawer-direction.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Whether visible | `boolean` |
| title | Title | `string` |
| direction | Direction | `'ltr' \| 'rtl' \| 'ttb' \| 'btt'` |
| size | Size (width or height) | `string \| number` |
| modal | Whether to show overlay | `boolean` |
| closeOnClickModal | Close on overlay click | `boolean` |
| showClose | Show close button | `boolean` |
| withHeader | Whether to show header | `boolean` |

Slots: default (content), `header`, `footer`.

Events: `update:modelValue`, `open`, `close`, `opened`.
