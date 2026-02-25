# Slider 滑块

在范围内拖拽选择数值，支持范围（双滑块）。

## 基础用法

```vue
<template>
  <NeoSlider v-model="value" :min="0" :max="100" />
</template>

<script setup lang="ts">
const value = ref(50)
</script>
```

## 带输入框

```vue
<template>
  <NeoSlider v-model="value" show-input />
</template>
```

## 范围选择

```vue
<template>
  <NeoSlider v-model="range" :min="0" :max="100" range />
</template>

<script setup lang="ts">
const range = ref([20, 80])
</script>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 绑定值（单值为 number，范围为 [number, number]） | `number \| number[]` |
| min | 最小值 | `number` |
| max | 最大值 | `number` |
| step | 步长 | `number` |
| showInput | 是否显示输入框 | `boolean` |
| showTooltip | 是否显示悬浮提示 | `boolean` |
| disabled | 禁用 | `boolean` |
| size | 尺寸 | `ComponentSize` |

事件：`update:modelValue`、`change`。
