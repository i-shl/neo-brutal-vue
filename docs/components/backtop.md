# Backtop

Button to scroll back to top after scrolling the page.

## Basic Usage

```vue
<template>
  <div style="height: 2000px">Long content...</div>
  <NeoBacktop />
</template>
```

## Custom Position & Visibility Height

```vue
<template>
  <NeoBacktop :visibility-height="300" :right="40" :bottom="80" />
</template>
```

## Specify Scroll Container

If scrolling happens inside a specific container, use `target` to specify the container selector.

```vue
<template>
  <div ref="scrollRef" class="scroll-box">
    Content...
  </div>
  <NeoBacktop target=".scroll-box" />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| target | Selector for scroll container | `string` |
| visibilityHeight | Show after scrolling past this height | `number` |
| right | Distance from right | `number` |
| bottom | Distance from bottom | `number` |
