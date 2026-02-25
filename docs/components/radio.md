# Radio 单选框

在一组选项中单选。

## 基础用法

```vue
<template>
  <NeoRadio v-model="picked" label="option1">选项 A</NeoRadio>
  <NeoRadio v-model="picked" label="option2">选项 B</NeoRadio>
</template>

<script setup lang="ts">
const picked = ref('option1')
</script>
```

## 单选组

```vue
<template>
  <NeoRadio v-model="city" label="beijing">北京</NeoRadio>
  <NeoRadio v-model="city" label="shanghai">上海</NeoRadio>
  <NeoRadio v-model="city" label="guangzhou">广州</NeoRadio>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 绑定值 | `string \| number \| boolean` |
| label | 当前项的值 | `string \| number \| boolean` |
| disabled | 禁用 | `boolean` |
| size | 尺寸 | `ComponentSize` |
| border | 是否显示边框 | `boolean` |

事件：`update:modelValue`、`change`。
