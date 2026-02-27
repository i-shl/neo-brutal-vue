# Tabs 标签页

选项卡切换内容。

## 基础用法

<demo vue="../../demos/tabs-basic.vue" />

## 卡片式与边框式

<demo vue="../../demos/tabs-card.vue" />

## 选中样式类型

通过 `activeType` 自定义选中标签的颜色：

<demo vue="../../demos/tabs-active-type.vue" />

## API

**NeoTabs**

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 当前激活的 name | `string` |
| type | 样式类型 | `'line' \| 'card' \| 'border-card'` |
| activeType | 选中标签颜色类型 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` |
| tabPosition | 标签位置 | `'top' \| 'right' \| 'bottom' \| 'left'` |

**NeoTabPane**

| 属性 | 说明 | 类型 |
|------|------|------|
| name | 唯一标识 | `string` |
| label | 标签文字 | `string` |
| disabled | 禁用 | `boolean` |
| closable | 是否可关闭 | `boolean` |

事件：`update:modelValue`、`tab-click`。
