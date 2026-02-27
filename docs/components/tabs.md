# Tabs

Tab switching for content.

## Basic Usage

<demo vue="../demos/tabs-basic.vue" />

## Card & Border Card

<demo vue="../demos/tabs-card.vue" />

## Active Type

Customize selected tab color via `activeType`:

<demo vue="../demos/tabs-active-type.vue" />

## API

**NeoTabs**

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Currently active name | `string` |
| type | Style type | `'line' \| 'card' \| 'border-card'` |
| activeType | Selected tab color type | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` |
| tabPosition | Tab position | `'top' \| 'right' \| 'bottom' \| 'left'` |

**NeoTabPane**

| Prop | Description | Type |
|------|-------------|------|
| name | Unique identifier | `string` |
| label | Tab label | `string` |
| disabled | Disabled | `boolean` |
| closable | Whether closable | `boolean` |

Events: `update:modelValue`, `tab-click`.
