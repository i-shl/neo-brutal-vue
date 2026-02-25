# Breadcrumb

Display current page path hierarchy.

## Basic Usage

```vue
<template>
  <NeoBreadcrumb>
    <NeoBreadcrumbItem to="/">Home</NeoBreadcrumbItem>
    <NeoBreadcrumbItem to="/list">List</NeoBreadcrumbItem>
    <NeoBreadcrumbItem>Detail</NeoBreadcrumbItem>
  </NeoBreadcrumb>
</template>
```

## Custom Separator

```vue
<template>
  <NeoBreadcrumb separator=">">
    <NeoBreadcrumbItem>Home</NeoBreadcrumbItem>
    <NeoBreadcrumbItem>Current</NeoBreadcrumbItem>
  </NeoBreadcrumb>
</template>
```

## API

**NeoBreadcrumb**

| Prop | Description | Type |
|------|-------------|------|
| separator | Separator | `string` |
| separatorIcon | Separator icon | `string` |

**NeoBreadcrumbItem**

| Prop | Description | Type |
|------|-------------|------|
| to | Link URL | `string` |
| replace | Whether to use replace navigation | `boolean` |

Slots: default (text or custom).
