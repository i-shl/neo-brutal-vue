# Theme & CSS Variables

NeoBrutal Vue uses CSS variables for theming, making it easy to override and extend.

## Primary & Semantic Colors

Override variables in your app's global styles or root element:

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

## Dark Theme

Switch to dark mode with `data-theme="dark"`:

```html
<html data-theme="dark">
```

The library already defines dark semantic colors (background, text, borders) for `[data-theme="dark"]`, so no extra CSS is needed.

## Borders & Shadows

Typical Neobrutalism variables:

- `--neo-border-width`: Border width (default 3px)
- `--neo-border-color`: Border color
- `--neo-shadow`: Hard offset shadow (e.g. 4px 4px 0)

Override as needed to fine-tune the style.
