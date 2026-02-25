# Menu

Navigation menu for sidebar or top.

## Basic Usage

```vue
<template>
  <NeoMenu default-active="1" mode="vertical">
    <NeoMenuItem index="1">Home</NeoMenuItem>
    <NeoMenuItem index="2">List</NeoMenuItem>
    <NeoMenuItem index="3">Settings</NeoMenuItem>
  </NeoMenu>
</template>
```

## Horizontal Menu

```vue
<template>
  <NeoMenu default-active="1" mode="horizontal">
    <NeoMenuItem index="1">Home</NeoMenuItem>
    <NeoMenuItem index="2">About</NeoMenuItem>
  </NeoMenu>
</template>
```

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

Slots: `title`, default. Submenus via `children` or nested NeoMenuItem.

Events: `select`.
