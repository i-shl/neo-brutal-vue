# Steps 步骤条

引导用户按步骤完成任务的步骤条。

## 基础用法

```vue
<template>
  <NeoSteps :active="1">
    <NeoStep title="步骤一" description="描述一" />
    <NeoStep title="步骤二" description="描述二" />
    <NeoStep title="步骤三" description="描述三" />
  </NeoSteps>
</template>
```

## 垂直方向与对齐

```vue
<template>
  <NeoSteps :active="2" direction="vertical">
    <NeoStep title="A" />
    <NeoStep title="B" />
  </NeoSteps>
</template>
```

## API

**NeoSteps**

| 属性 | 说明 | 类型 |
|------|------|------|
| active | 当前步骤（从 0 开始） | `number` |
| direction | 方向 | `'horizontal' \| 'vertical'` |
| space | 间距 | `number \| string` |
| processStatus | 进行中状态 | `string` |
| finishStatus | 已完成状态 | `string` |
| alignCenter | 标题是否居中 | `boolean` |

**NeoStep**

| 属性 | 说明 | 类型 |
|------|------|------|
| title | 标题 | `string` |
| description | 描述 | `string` |
| icon | 图标 | `string` |
| status | 状态 | `'wait' \| 'process' \| 'finish' \| 'error' \| 'success'` |
