# Input 输入框

单行文本输入，支持前缀、后缀、清除、密码显隐等。

## 基础用法

```vue
<template>
  <NeoInput v-model="value" placeholder="请输入" />
</template>

<script setup lang="ts">
const value = ref('')
</script>
```

## 禁用与只读

```vue
<template>
  <NeoInput v-model="value" disabled placeholder="禁用" />
  <NeoInput v-model="value" readonly placeholder="只读" />
</template>
```

## 可清空

```vue
<template>
  <NeoInput v-model="value" clearable placeholder="可清空" />
</template>
```

## 尺寸与形状

`size`：`xs` / `sm` / `md` / `lg` / `xl`。  
`shape`：`default` / `round` / `pill`。

## API

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 绑定值 | `string \| number` | - |
| type | 输入类型 | `string` | `'text'` |
| size | 尺寸 | `ComponentSize` | `'md'` |
| disabled | 禁用 | `boolean` | `false` |
| readonly | 只读 | `boolean` | `false` |
| clearable | 可清空 | `boolean` | `false` |
| placeholder | 占位符 | `string` | `''` |

事件：`update:modelValue`、`input`、`change`、`focus`、`blur`、`clear`。
