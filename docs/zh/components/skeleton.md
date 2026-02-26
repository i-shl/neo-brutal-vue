# Skeleton 骨架屏

内容加载中的占位骨架。

## 基础用法

<demo vue="../../demos/skeleton-basic.vue" />

## 类型 (Type)

<demo vue="../../demos/skeleton-type.vue" />

## 多行与自定义

<demo vue="../../demos/skeleton-rows.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| loading | 是否显示骨架 | `boolean` |
| animated | 是否动画 | `boolean` |
| rows | 段落行数 | `number` |
| avatar | 是否显示头像占位 | `boolean` |
| type | 骨架颜色类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` |

插槽：默认（加载完成后显示的内容）。
