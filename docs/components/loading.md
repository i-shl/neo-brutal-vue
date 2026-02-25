# Loading 加载

加载中状态，支持全屏或局部。

## 基础用法

```vue
<template>
  <NeoLoading text="加载中..." />
</template>
```

## 全屏加载

通过方法调用（若组件库提供全局方法）：

```ts
// 打开全屏 Loading
NeoLoading.service({ text: '加载中...', fullscreen: true })

// 关闭
loadingInstance.close()
```

或在父级容器内使用：

```vue
<template>
  <div style="position: relative;">
    <NeoLoading fullscreen />
    内容区域
  </div>
</template>
```

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| text | 加载文字 | `string` |
| fullscreen | 是否全屏 | `boolean` |
| lock | 是否锁定滚动 | `boolean` |
| background | 遮罩背景色 | `string` |
