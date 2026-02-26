# Breadcrumb

Display current page path hierarchy.

## Basic Usage

<demo vue="../demos/breadcrumb-basic.vue" />

## Custom Separator

<demo vue="../demos/breadcrumb-separator.vue" />

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
