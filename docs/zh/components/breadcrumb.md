# Breadcrumb 面包屑

显示当前页面的路径层级。

## 基础用法

<demo vue="../../demos/breadcrumb-basic.vue" />

## 自定义分隔符

<demo vue="../../demos/breadcrumb-separator.vue" />

## API

**NeoBreadcrumb**

| 属性 | 说明 | 类型 |
|------|------|------|
| separator | 分隔符 | `string` |
| separatorIcon | 分隔符图标 | `string` |

**NeoBreadcrumbItem**

| 属性 | 说明 | 类型 |
|------|------|------|
| to | 链接地址 | `string` |
| replace | 是否 replace 跳转 | `boolean` |

插槽：默认（文字或自定义）。
