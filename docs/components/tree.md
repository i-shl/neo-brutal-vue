# Tree

Tree structure data display. Supports expand/collapse and selection.

## Basic Usage

<demo vue="../demos/tree-basic.vue" />

## Selectable & Line

<demo vue="../demos/tree-selectable.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| data | Tree data | `TreeData[]` |
| showLine | Whether to show connecting lines | `boolean` |
| selectable | Whether selectable | `boolean` |

TreeData structure: `{ id, label, children?, expanded? }`.

Events: `node-click`, etc.
