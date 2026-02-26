# Card 卡片

内容容器，支持标题、副标题、插槽。

## 基础用法

<demo vue="../../demos/card-basic.vue" />

## 变体 (variant)

`default`、`flat`、`elevated`、`gradient`、`colored`。

## 插槽

- `header`：自定义头部
- `title`：标题
- `sub-title`：副标题
- `footer`：底部
- 默认：正文内容

## 无头部

<demo vue="../../demos/card-no-header.vue" />

设置 <code>show-header="false"</code> 可隐藏头部。

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| title | 标题 | `string` |
| subTitle | 副标题 | `string` |
| showHeader | 是否显示头部 | `boolean` |
| showFooter | 是否显示底部 | `boolean` |
| shadow | 是否阴影 | `boolean \| 'hover' \| 'never'` |
| bordered | 是否边框 | `boolean` |
| variant | 样式变体 | `CardVariant` |
