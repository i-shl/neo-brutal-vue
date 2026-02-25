# Alert 警告提示

页面内提示信息，支持类型、可关闭。

## 基础用法

```vue
<template>
  <NeoAlert title="提示" description="这是一段描述文字" />
  <NeoAlert type="success" title="成功" />
  <NeoAlert type="warning" title="警告" />
  <NeoAlert type="error" title="错误" />
  <NeoAlert type="info" title="信息" />
</template>
```

## 可关闭

```vue
<template>
  <NeoAlert title="可关闭" closable @close="handleClose" />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| title | 标题 | `string` |
| description | 描述 | `string` |
| type | 类型 | `'success' \| 'warning' \| 'error' \| 'info'` |
| closable | 是否可关闭 | `boolean` |
| showIcon | 是否显示图标 | `boolean` |
| effect | 效果 | `'light' \| 'dark'` |

事件：`close`。
