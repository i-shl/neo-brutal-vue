# Drawer 抽屉

从屏幕一侧滑出的面板，常用于表单或详情。

## 基础用法

```vue
<template>
  <NeoButton @click="open = true">打开抽屉</NeoButton>
  <NeoDrawer v-model="open" title="抽屉标题" direction="rtl">
    抽屉内容
  </NeoDrawer>
</template>

<script setup lang="ts">
const open = ref(false)
</script>
```

## 方向与尺寸

```vue
<template>
  <NeoDrawer v-model="open" title="右侧抽屉" direction="rtl" size="400px" />
  <NeoDrawer v-model="open2" title="底部抽屉" direction="btt" />
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 是否显示 | `boolean` |
| title | 标题 | `string` |
| direction | 方向 | `'ltr' \| 'rtl' \| 'ttb' \| 'btt'` |
| size | 尺寸（宽或高） | `string \| number` |
| modal | 是否显示遮罩 | `boolean` |
| closeOnClickModal | 点击遮罩关闭 | `boolean` |
| showClose | 显示关闭按钮 | `boolean` |
| withHeader | 是否显示头部 | `boolean` |

插槽：默认（内容）、`header`、`footer`。

事件：`update:modelValue`、`open`、`close`、`opened`。
