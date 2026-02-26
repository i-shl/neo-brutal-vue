# Timeline 时间轴

按时间顺序展示事件列表。

## 基础用法

<demo vue="../../demos/timeline-basic.vue" />

## 带时间戳与状态

<demo vue="../../demos/timeline-status.vue" />

## API

**NeoTimeline**：容器，可配置线条样式。

**NeoTimelineItem**

| 属性 | 说明 | 类型 |
|------|------|------|
| timestamp | 时间戳文字 | `string` |
| type | 节点类型/颜色 | `string` |

插槽：默认（内容）。
