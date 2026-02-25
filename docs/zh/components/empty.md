# Empty 空状态

无数据时的占位展示。

## 基础用法

```vue
<template>
  <NeoEmpty description="暂无数据" />
</template>
```

## 自定义插槽

```vue
<template>
  <NeoEmpty>
    <template #default>
      <p>自定义空状态内容</p>
      <NeoButton type="primary">去添加</NeoButton>
    </template>
  </NeoEmpty>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| description | 描述文字 | `string` |

插槽：默认（自定义内容）。
