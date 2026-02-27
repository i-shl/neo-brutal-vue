# Link 链接

文字链接组件，保持 Neobrutalism 风格。

## 基础用法

<demo vue="../../demos/link-basic.vue" />

## 悬停颜色

使用 `type` 选择预设悬停颜色，或使用 `hoverColor` 自定义。自定义时可配合 `hoverTextColor` 设置文字颜色。

<demo vue="../../demos/link-type.vue" />

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| href | 跳转地址 | `string` | - |
| underline | 是否下划线 | `boolean` | `true` |
| disabled | 是否禁用 | `boolean` | `false` |
| target | 打开方式，如 `_blank` | `string` | - |
| type | 悬停颜色类型 | `'default' \| 'primary' \| 'secondary' \| 'accent' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` |
| hoverColor | 自定义悬停背景色 | `string` | - |
| hoverTextColor | 自定义悬停文字色（配合 hoverColor） | `string` | `'#1a1a1a'` |
