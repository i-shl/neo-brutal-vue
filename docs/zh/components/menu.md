# Menu 菜单

侧边或顶部的导航菜单。

## 基础用法

```vue
<template>
  <NeoMenu default-active="1" mode="vertical">
    <NeoMenuItem index="1">首页</NeoMenuItem>
    <NeoMenuItem index="2">列表</NeoMenuItem>
    <NeoMenuItem index="3">设置</NeoMenuItem>
  </NeoMenu>
</template>
```

## 水平菜单

```vue
<template>
  <NeoMenu default-active="1" mode="horizontal">
    <NeoMenuItem index="1">首页</NeoMenuItem>
    <NeoMenuItem index="2">关于</NeoMenuItem>
  </NeoMenu>
</template>
```

## API

**NeoMenu**

| 属性 | 说明 | 类型 |
|------|------|------|
| defaultActive | 默认激活的 index | `string` |
| mode | 模式 | `'horizontal' \| 'vertical'` |
| collapse | 是否折叠（垂直时） | `boolean` |
| backgroundColor | 背景色 | `string` |
| textColor | 文字颜色 | `string` |
| activeTextColor | 激活项文字颜色 | `string` |

**NeoMenuItem**

| 属性 | 说明 | 类型 |
|------|------|------|
| index | 唯一标识 | `string` |
| disabled | 禁用 | `boolean` |

插槽：`title`、默认。子菜单通过 `children` 或嵌套 NeoMenuItem 实现。

事件：`select`。
