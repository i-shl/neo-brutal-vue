# Menu

Navigation menu for sidebar or top.

## Basic Usage

<demo vue="../demos/menu-basic.vue" />

## Horizontal Menu

<demo vue="../demos/menu-horizontal.vue" />

## SubMenu

Use `NeoSubMenu` with `NeoMenuItem` children for nested menus.

<demo vue="../demos/menu-submenu.vue" />

## API

**NeoMenu**

| Prop | Description | Type |
|------|-------------|------|
| defaultActive | Default active index | `string` |
| mode | Mode | `'horizontal' \| 'vertical'` |
| collapse | Whether collapsed (vertical mode) | `boolean` |
| backgroundColor | Background color | `string` |
| textColor | Text color | `string` |
| activeTextColor | Active item text color | `string` |

**NeoMenuItem**

| Prop | Description | Type |
|------|-------------|------|
| index | Unique identifier | `string` |
| disabled | Disabled | `boolean` |

**NeoSubMenu**

| Prop | Description | Type |
|------|-------------|------|
| index | Unique identifier (use `parent-child` for nested) | `string` |
| title | Submenu title | `string` |
| disabled | Disabled | `boolean` |

Events: `select`.
