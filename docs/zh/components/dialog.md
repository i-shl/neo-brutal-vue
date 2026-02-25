# Dialog 对话框

模态对话框，用于表单、确认或自定义内容。

## 基础用法

```vue
<template>
  <NeoButton @click="open = true">打开对话框</NeoButton>
  <NeoDialog v-model="open" title="标题" width="500px">
    对话框内容
  </NeoDialog>
</template>

<script setup lang="ts">
const open = ref(false)
</script>
```

## 自定义底部

```vue
<template>
  <NeoDialog v-model="open" title="确认">
    <p>确定要执行此操作吗？</p>
    <template #footer>
      <NeoButton @click="open = false">取消</NeoButton>
      <NeoButton type="primary" @click="confirm">确定</NeoButton>
    </template>
  </NeoDialog>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 是否显示 | `boolean` |
| title | 标题 | `string` |
| width | 宽度 | `string \| number` |
| modal | 是否显示遮罩 | `boolean` |
| closeOnClickModal | 点击遮罩是否关闭 | `boolean` |
| closeOnPressEscape | 按 Esc 是否关闭 | `boolean` |
| showClose | 是否显示关闭按钮 | `boolean` |
| destroyOnClose | 关闭时销毁内容 | `boolean` |

插槽：默认（内容）、`header`、`footer`。

事件：`update:modelValue`、`open`、`close`、`opened`。
