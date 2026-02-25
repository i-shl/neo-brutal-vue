# Breadcrumb 面包屑

显示当前页面的路径层级。

## 基础用法

```vue
<template>
  <NeoBreadcrumb>
    <NeoBreadcrumbItem to="/">首页</NeoBreadcrumbItem>
    <NeoBreadcrumbItem to="/list">列表</NeoBreadcrumbItem>
    <NeoBreadcrumbItem>详情</NeoBreadcrumbItem>
  </NeoBreadcrumb>
</template>
```

## 自定义分隔符

```vue
<template>
  <NeoBreadcrumb separator=">">
    <NeoBreadcrumbItem>首页</NeoBreadcrumbItem>
    <NeoBreadcrumbItem>当前</NeoBreadcrumbItem>
  </NeoBreadcrumb>
</template>
```

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
