# Row 行

栅格行，与 Col 搭配实现 12 栏布局。

## 基础用法

<demo vue="../../demos/row-basic.vue" />

## 对齐方式

<demo vue="../../demos/row-align.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| columns | 列数或自定义 grid-template-columns（默认 12） | `number \| string` |
| gap | 栅格间隔（如 16 或 "16px"） | `number \| string` |
| align | 垂直对齐 | `'start' \| 'center' \| 'end' \| 'stretch'` |
| justify | 水平对齐 | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` |
