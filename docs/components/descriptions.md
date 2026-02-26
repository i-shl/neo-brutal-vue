# Descriptions

Display information in key-value pairs.

## Basic Usage

<demo vue="../demos/descriptions-basic.vue" />

## Border & Columns

<demo vue="../demos/descriptions-border.vue" />

## API

**NeoDescriptions**

| Prop | Description | Type |
|------|-------------|------|
| title | Title | `string` |
| column | Number of columns | `number` |
| border | Whether to show border | `boolean` |
| direction | Layout direction | `'horizontal' \| 'vertical'` |

**NeoDescriptionsItem**

| Prop | Description | Type |
|------|-------------|------|
| label | Label | `string` |
| span | Column span | `number` |
