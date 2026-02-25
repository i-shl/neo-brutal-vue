# Toast 轻提示

轻量级全局提示，一段时间后自动消失。

## 基础用法

通过组件或全局方法（若提供）调用：

```vue
<template>
  <NeoToast v-model="visible" type="success" title="成功" message="操作完成" />
</template>
```

或通过 API 调用（示例）：

```ts
// 若库提供 useToast 或 $toast
toast.success('操作成功')
toast.error('操作失败')
toast({ type: 'info', message: '提示信息' })
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 是否显示 | `boolean` |
| type | 类型 | `'success' \| 'error' \| 'warning' \| 'info' \| 'default'` |
| title | 标题 | `string` |
| message | 正文 | `string` |
| duration | 显示时长（毫秒） | `number` |
| closable | 是否可关闭 | `boolean` |
| position | 位置 | `ToastPosition` |

事件：`close`。
