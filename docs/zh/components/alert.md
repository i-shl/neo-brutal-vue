# Alert 警告提示

页面内提示信息，支持类型、可关闭。

## 基础用法

<demo vue="../../demos/alert-basic.vue" />

## 可关闭

<demo vue="../../demos/alert-closable.vue" />

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
