# Resizable 可缩放面板

具备典型新布鲁塔利复古硬核拖拽手柄的响应式重置体积版块。

## 基础用法

它的核心是原生 CSS 的 `resize` 属性，但组件右下角彻底替换了被浏览器魔改的默认调整图案，采用了黑化像素风网格手柄以适应环境。

<demo vue="../../demos/resizable-basic.vue" />

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `direction` | `'both' \| 'horizontal' \| 'vertical' \| 'none'` | `'both'` | 允许扩展和紧缩的轴线轨道控制。 |
| `minWidth` | `string` | `'200px'` | 维持盒体结构的最小宽度边界。 |
| `minHeight` | `string` | `'100px'` | 垂直维度的最小承重墙高度。 |
| `maxWidth` | `string` | `''` | 最大延展边界。 |
| `maxHeight` | `string` | `''` | 最大伸长边界。 |
