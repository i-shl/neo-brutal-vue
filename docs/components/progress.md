# Progress

Display progress percentage.

## Basic Usage

```vue
<template>
  <NeoProgress :percentage="60" />
</template>
```

## Status & Inner Text

```vue
<template>
  <NeoProgress :percentage="80" status="success" />
  <NeoProgress :percentage="50" :show-text="true" text-inside />
</template>
```

## Custom Color

```vue
<template>
  <NeoProgress :percentage="70" color="#8338ec" />
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| percentage | Progress 0–100 | `number` |
| status | Status | `'success' \| 'warning' \| 'exception'` |
| strokeWidth | Stroke width | `number` |
| showText | Whether to show text | `boolean` |
| textInside | Whether text is inside bar | `boolean` |
| color | Progress bar color | `string \| string[]` |
| format | Custom text formatter | `(p: number) => string` |
