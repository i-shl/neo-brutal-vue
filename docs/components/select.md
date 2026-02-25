# Select 选择器

下拉选择，支持单选、多选、可搜索。

## 基础用法

```vue
<template>
  <NeoSelect
    v-model="value"
    :options="options"
    placeholder="请选择"
  />
</template>

<script setup lang="ts">
const value = ref('')
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
]
</script>
```

## 多选

```vue
<template>
  <NeoSelect v-model="values" :options="options" multiple placeholder="多选" />
</template>

<script setup lang="ts">
const values = ref<string[]>([])
</script>
```

## 可搜索

```vue
<template>
  <NeoSelect v-model="value" :options="options" filterable placeholder="输入搜索" />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 绑定值（单选为值，多选为数组） | `string \| number \| boolean \| array` |
| options | 选项列表 | `SelectOption[]` |
| multiple | 是否多选 | `boolean` |
| filterable | 是否可搜索 | `boolean` |
| placeholder | 占位符 | `string` |
| clearable | 是否可清空 | `boolean` |
| disabled | 禁用 | `boolean` |
| size | 尺寸 | `ComponentSize` |

事件：`update:modelValue`、`change`、`clear`。
