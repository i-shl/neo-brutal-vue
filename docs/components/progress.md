# Progress 进度条

展示进度百分比。

## 基础用法

```vue
<template>
  <NeoProgress :percentage="60" />
</template>
```

## 状态与内显文字

```vue
<template>
  <NeoProgress :percentage="80" status="success" />
  <NeoProgress :percentage="50" :show-text="true" text-inside />
</template>
```

## 自定义颜色

```vue
<template>
  <NeoProgress :percentage="70" color="#8338ec" />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| percentage | 进度 0–100 | `number` |
| status | 状态 | `'success' \| 'warning' \| 'exception'` |
| strokeWidth | 线条宽度 | `number` |
| showText | 是否显示文字 | `boolean` |
| textInside | 文字是否在条内 | `boolean` |
| color | 进度条颜色 | `string \| string[]` |
| format | 自定义文字格式化 | `(p: number) => string` |
