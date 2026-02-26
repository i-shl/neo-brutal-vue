# Marquee 跑马灯

一个自动滚动的容器组件，可以为你的网站带来经典的新布鲁塔利风（Neobrutalism）走马灯效果。

## 基础用法

使用 `<NeoMarquee>` 包裹你想滚动的文本或元素。组件会自动复制内部的 `slot` 来实现无缝衔接的无限滚动。默认支持鼠标悬浮时暂停滚动。

<demo vue="../../demos/marquee-basic.vue" />

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `duration` | `number` | `15` | 完成一次完整滚动的周期时间（秒）。数值越小滚动越快。 |
| `reverse` | `boolean` | `false` | 如果为 true，则从左往右滚动，反之从右向左。 |
| `pauseOnHover` | `boolean` | `true` | 为 true 时，鼠标悬浮在跑马灯上会暂停动画。 |
