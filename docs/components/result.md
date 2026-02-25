# Result 结果页

用于反馈操作结果（成功、失败、403、404、500 等）。

## 基础用法

```vue
<template>
  <NeoResult status="success" title="操作成功" sub-title="您的申请已提交" />
</template>
```

## 不同状态

```vue
<template>
  <NeoResult status="error" title="提交失败" sub-title="请稍后重试" />
  <NeoResult status="404" title="页面不存在" />
  <NeoResult status="403" title="无权限" />
</template>
```

## 自定义操作区

```vue
<template>
  <NeoResult status="success" title="成功">
    <template #extra>
      <NeoButton type="primary">返回首页</NeoButton>
    </template>
  </NeoResult>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| status | 状态 | `'success' \| 'warning' \| 'error' \| 'info' \| '404' \| '403' \| '500'` |
| title | 标题 | `string` |
| subTitle | 副标题 | `string` |

插槽：`extra`（底部操作区）。
