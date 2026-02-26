# Radio 单选框

在一组选项中单选。

## 基础用法

<demo vue="../../demos/radio-basic.vue" />

## 单选组（带边框）

<demo vue="../../demos/radio-group.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 绑定值 | `string \| number \| boolean` |
| label | 当前项的值 | `string \| number \| boolean` |
| disabled | 禁用 | `boolean` |
| size | 尺寸 | `ComponentSize` |
| border | 是否显示边框 | `boolean` |

事件：`update:modelValue`、`change`。
