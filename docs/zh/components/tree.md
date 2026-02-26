# Tree 树形控件

树形结构数据展示，支持展开/收起、选中样式。

## 基础用法

<demo vue="../../demos/tree-basic.vue" />

## 可选与选中状态

支持通过 `v-model:selectedKey` 绑定选中的节点 ID。

<demo vue="../../demos/tree-selectable.vue" />

## API

### Attributes

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| data | 树数据 | `TreeData[]` | `[]` |
| v-model:selectedKey | 选中节点的 ID | `string | number` | `-` |
| showLine | 是否显示连接线 | `boolean` | `true` |
| selectable | 是否支持选中样式 | `boolean` | `true` |

### TreeData 结构

| 属性 | 说明 | 类型 |
|------|------|------|
| id | 节点唯一 ID | `string | number` |
| label | 节点文本 | `string` |
| children | 子节点数据 | `TreeData[]` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| node-click | 节点点击时触发 | `(node: TreeData)` |
| node-expand | 节点展开/收起时触发 | `(id: string | number)` |
| update:selectedKey | 选中项改变时触发 | `(id: string | number)` |
