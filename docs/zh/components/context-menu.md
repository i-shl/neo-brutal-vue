# ContextMenu 右键菜单

由鼠标右键单击引发的系统级覆盖下拉悬浮菜单窗体。

## 基础用法

只要被 `<NeoContextMenu>` 这个外壳覆盖的领地，浏览器原本死板的右键系统菜单就会失效，并拔地而起一座粗野暴力的自定义面板。

<demo vue="../../demos/context-menu-basic.vue" />

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `options` | `Array<{ label?, action?, disabled?, divider? }>` | `[]` | 包含所有可点击子项目的对象配置数组。 |

### Option Interface

每一个传入数组元素的结构体必须遵守以下字段：

| 键名 | 类型 | 说明 |
| --- | --- | --- |
| `label` | `string` | 展现在菜单中的文本。 |
| `action` | `Function` | 点击条目时调用的事件回调函数。 |
| `disabled` | `boolean` | 启用后彻底变灰，不可响应操作。 |
| `divider` | `boolean` | 设为 true 则将其渲染为纯黑色的分隔横线。 |
