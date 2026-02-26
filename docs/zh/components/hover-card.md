# HoverCard 悬浮卡片

触发式的辅助信息浮层面板。

## 基础用法

它与 Popover 气泡框极为相似，但采用 `mouseenter` 事件代替点击触发。由于无需主动点击，非常适合在列表项或者超链接上展示大面积的富文本预览，比如用户数据分析、社交名片卡。

<demo vue="../../demos/hover-card-basic.vue" />

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | 悬浮卡片相对重心的抛掷位置。 |
| `width` | `string \| number` | `''` | 卡片的固定宽度（带阴影）。 |
| `openDelay` | `number` | `200` | 鼠标进入经过多少毫秒后才显示挂件。 |
| `closeDelay` | `number` | `300` | 鼠标移出经过经过多少毫秒才毁灭挂件。 |

### Slots

| 名称 | 说明 |
| --- | --- |
| `default` | 供鼠标寻找停泊点的触发区域。 |
| `content` | 重装装甲浮层内部需要渲染的核心区块。 |
