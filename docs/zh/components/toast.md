# Toast 轻提示

轻量级全局提示，一段时间后自动消失。

## 基础用法

<demo vue="../../demos/toast-basic.vue" />

## 类型

<demo vue="../../demos/toast-more.vue" />

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
