# Dialog

Modal dialog for forms, confirmation, or custom content.

## Basic Usage

<demo vue="../demos/dialog-basic.vue" />

## Custom Footer

<demo vue="../demos/dialog-footer.vue" />

## Header Type

Use `type` to customize the dialog header color.

<demo vue="../demos/dialog-type.vue" />

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| modelValue | Whether visible | `boolean` | - |
| title | Title | `string` | - |
| type | Header color type | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` |
| width | Width | `string \| number` | `'500px'` |
| modal | Whether to show overlay | `boolean` |
| closeOnClickModal | Whether to close on overlay click | `boolean` |
| closeOnPressEscape | Whether to close on Esc | `boolean` |
| showClose | Whether to show close button | `boolean` |
| destroyOnClose | Destroy content on close | `boolean` |

Slots: default (content), `header`, `footer`.

Events: `update:modelValue`, `open`, `close`, `opened`.
