# Backtop 回到顶部

滚动页面后点击回到顶部的按钮。

## 基础用法

<demo vue="../../demos/backtop-basic.vue" />

## 自定义位置与可见高度

<demo vue="../../demos/backtop-custom.vue" />

## 指定滚动容器

若页面滚动发生在指定容器内，可通过 `target` 指定该容器的选择器。

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| target | 滚动容器的选择器 | `string` |
| visibilityHeight | 滚动超过多少高度后显示 | `number` |
| right | 距右侧距离 | `number` |
| bottom | 距底部距离 | `number` |
