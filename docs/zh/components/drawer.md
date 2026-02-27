# Drawer 抽屉

从屏幕一侧滑出的面板，常用于表单或详情。

## 基础用法

<demo vue="../../demos/drawer-basic.vue" />

## 方向与尺寸

<demo vue="../../demos/drawer-direction.vue" />

## 类型颜色

通过 `type` 自定义头部颜色：

<demo vue="../../demos/drawer-type.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 是否显示 | `boolean` |
| title | 标题 | `string` |
| type | 头部颜色类型 | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` |
| direction | 方向 | `'ltr' \| 'rtl' \| 'ttb' \| 'btt'` |
| size | 尺寸（宽或高） | `string \| number` |
| modal | 是否显示遮罩 | `boolean` |
| closeOnClickModal | 点击遮罩关闭 | `boolean` |
| showClose | 显示关闭按钮 | `boolean` |
| withHeader | 是否显示头部 | `boolean` |

插槽：默认（内容）、`header`、`footer`。

事件：`update:modelValue`、`open`、`close`、`opened`。
