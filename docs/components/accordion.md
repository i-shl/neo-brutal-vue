# Accordion

Similar to Collapse. Supports accordion (single expand) or multiple expand. API is consistent with NeoCollapse.

## Basic Usage

<demo vue="../demos/accordion-basic.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Currently expanded item(s) | `string \| number \| (string \| number)[]` |
| accordion | Whether accordion mode | `boolean` |

Events: `update:modelValue`.
