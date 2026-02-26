# Collapse

Expandable/collapsible panel group.

## Basic Usage

<demo vue="../demos/collapse-basic.vue" />

## Accordion (Single Expand)

<demo vue="../demos/collapse-accordion.vue" />

## API

**NeoCollapse**

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Currently expanded item(s) (string or string array) | `string \| string[]` |
| accordion | Whether accordion mode (only one expanded) | `boolean` |

**NeoCollapseItem**

| Prop | Description | Type |
|------|-------------|------|
| name | Unique identifier | `string` |
| title | Title | `string` |
| disabled | Disabled | `boolean` |

Events: `update:modelValue`, `change`.
