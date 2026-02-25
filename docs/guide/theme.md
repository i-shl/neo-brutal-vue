# 主题与 CSS 变量

NeoBrutal Vue 使用 CSS 变量控制主题，便于覆盖和扩展。

## 主色与语义色

在 your-app 的全局样式或根元素上覆盖变量即可换肤：

```css
:root {
  --neo-primary: #8338ec;
  --neo-secondary: #06d6a0;
  --neo-accent: #ffbe0b;
  --neo-success: #06d6a0;
  --neo-warning: #fb5607;
  --neo-danger: #ef233c;
  --neo-info: #3a86ff;
}
```

## 深色主题

通过 `data-theme="dark"` 切换深色：

```html
<html data-theme="dark">
```

组件库已为 `[data-theme="dark"]` 定义深色语义色（背景、文字、边框等），无需额外写大量 CSS。

## 边框与阴影

Neobrutalism 典型变量：

- `--neo-border-width`：边框粗细（默认 3px）
- `--neo-border-color`：边框颜色
- `--neo-shadow`：硬偏移阴影（如 4px 4px 0）

按需覆盖即可微调风格。
