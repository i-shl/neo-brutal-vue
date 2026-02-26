# Popover 气泡卡片

点击/悬停时弹出的气泡层，可放更多内容。

## 基础用法

<demo vue="../../demos/popover-basic.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| content | 正文内容 | `string` |
| title | 标题 | `string` |
| trigger | 触发方式 | `'hover' \| 'click' \| 'focus' \| 'manual'` |
| placement | 位置 | 同 Tooltip |
| width | 宽度 | `string \| number` |
| effect | 主题 | `'light' \| 'dark'` |
| disabled | 禁用 | `boolean` |

插槽：默认（触发元素）、`content`（自定义内容）。
