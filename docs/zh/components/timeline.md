# Timeline 时间轴

按时间顺序展示事件列表。

## 基础用法

```vue
<template>
  <NeoTimeline>
    <NeoTimelineItem>步骤一</NeoTimelineItem>
    <NeoTimelineItem>步骤二</NeoTimelineItem>
    <NeoTimelineItem>步骤三</NeoTimelineItem>
  </NeoTimeline>
</template>
```

## 带时间戳与状态

```vue
<template>
  <NeoTimeline>
    <NeoTimelineItem timestamp="2025-01-01" type="primary">完成</NeoTimelineItem>
    <NeoTimelineItem timestamp="2025-01-02">进行中</NeoTimelineItem>
  </NeoTimeline>
</template>
```

## API

**NeoTimeline**：容器，可配置线条样式。

**NeoTimelineItem**

| 属性 | 说明 | 类型 |
|------|------|------|
| timestamp | 时间戳文字 | `string` |
| type | 节点类型/颜色 | `string` |

插槽：默认（内容）。
