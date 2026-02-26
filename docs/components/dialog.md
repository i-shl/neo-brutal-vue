# Dialog

Modal dialog for forms, confirmation, or custom content.

## Basic Usage

<demo vue="../demos/dialog-basic.vue" />

## Custom Footer

<demo vue="../demos/dialog-footer.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Whether visible | `boolean` |
| title | Title | `string` |
| width | Width | `string \| number` |
| modal | Whether to show overlay | `boolean` |
| closeOnClickModal | Whether to close on overlay click | `boolean` |
| closeOnPressEscape | Whether to close on Esc | `boolean` |
| showClose | Whether to show close button | `boolean` |
| destroyOnClose | Destroy content on close | `boolean` |

Slots: default (content), `header`, `footer`.

Events: `update:modelValue`, `open`, `close`, `opened`.
