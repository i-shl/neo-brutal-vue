# Descriptions 描述列表

以键值对形式展示信息。

## 基础用法

```vue
<template>
  <NeoDescriptions title="用户信息">
    <NeoDescriptionsItem label="姓名">张三</NeoDescriptionsItem>
    <NeoDescriptionsItem label="手机">138****0000</NeoDescriptionsItem>
    <NeoDescriptionsItem label="地址" :span="2">北京市朝阳区</NeoDescriptionsItem>
  </NeoDescriptions>
</template>
```

## 边框与列数

```vue
<template>
  <NeoDescriptions :column="2" border>
    <NeoDescriptionsItem label="A">1</NeoDescriptionsItem>
    <NeoDescriptionsItem label="B">2</NeoDescriptionsItem>
  </NeoDescriptions>
</template>
```

## API

**NeoDescriptions**

| 属性 | 说明 | 类型 |
|------|------|------|
| title | 标题 | `string` |
| column | 列数 | `number` |
| border | 是否显示边框 | `boolean` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` |

**NeoDescriptionsItem**

| 属性 | 说明 | 类型 |
|------|------|------|
| label | 标签 | `string` |
| span | 跨列数 | `number` |
