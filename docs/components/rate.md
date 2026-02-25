# Rate 评分

星级评分组件。

## 基础用法

```vue
<template>
  <NeoRate v-model="score" />
</template>

<script setup lang="ts">
const score = ref(3)
</script>
```

## 半星与自定义数量

```vue
<template>
  <NeoRate v-model="score" allow-half :max="10" />
</template>
```

## 只读

```vue
<template>
  <NeoRate v-model="score" disabled />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 当前分数 | `number` |
| max | 最大分数（星星数） | `number` |
| allowHalf | 是否允许半选 | `boolean` |
| disabled | 禁用 | `boolean` |
| color | 选中颜色 | `string` |
| voidColor | 未选中颜色 | `string` |

事件：`update:modelValue`、`change`。
