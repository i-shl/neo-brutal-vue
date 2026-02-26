# Menu 菜单

侧边或顶部的导航菜单。

## 基础用法

<demo vue="../../demos/menu-basic.vue" />

## 水平菜单

<demo vue="../../demos/menu-horizontal.vue" />

## 子菜单

使用 `NeoSubMenu` 配合 `NeoMenuItem` 实现嵌套菜单。

<demo vue="../../demos/menu-submenu.vue" />

## API

**NeoMenu**

| 属性 | 说明 | 类型 |
|------|------|------|
| defaultActive | 默认激活的 index | `string` |
| mode | 模式 | `'horizontal' \| 'vertical'` |
| collapse | 是否折叠（垂直时） | `boolean` |
| backgroundColor | 背景色 | `string` |
| textColor | 文字颜色 | `string` |
| activeTextColor | 激活项文字颜色 | `string` |

**NeoMenuItem**

| 属性 | 说明 | 类型 |
|------|------|------|
| index | 唯一标识 | `string` |
| disabled | 禁用 | `boolean` |

**NeoSubMenu**

| 属性 | 说明 | 类型 |
|------|------|------|
| index | 唯一标识（嵌套用 `父-子`） | `string` |
| title | 子菜单标题 | `string` |
| disabled | 禁用 | `boolean` |

事件：`select`。
