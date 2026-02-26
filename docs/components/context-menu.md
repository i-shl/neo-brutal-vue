# ContextMenu

A floating right-click context menu array deployed directly relative to the cursor position.

## Basic Usage

Wrap any target container with `<NeoContextMenu>`. Upon a right-click inside the borders of that wrapper, the browser's default menu is squelched and the sharp-cornered Neobrutalist custom UI takes its place.

<demo vue="../demos/context-menu-basic.vue" />

## API

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `options` | `Array<{ label?, action?, disabled?, divider? }>` | `[]` | The array of menu object definitions to map over. |

### Option Interface

| Key | Type | Description |
| --- | --- | --- |
| `label` | `string` | The text identifying the action. |
| `action` | `Function` | The callback executed on click. Bypassed if disabled. |
| `disabled` | `boolean` | Dulls out the element. |
| `divider` | `boolean` | If true, renders a solid black line separator instead of a real menu item. |
