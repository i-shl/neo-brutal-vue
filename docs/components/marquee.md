# Marquee

An auto-scrolling container that brings the classic Neobrutalist ticker style to your website.

## Basic Usage

Use `<NeoMarquee>` to wrap text or elements you want to auto-scroll. The component will duplicate its children to create an infinite rolling effect. By default, it pauses when hovered.

<demo vue="../demos/marquee-basic.vue" />

## API

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `duration` | `number` | `15` | Time in seconds for one full scroll cycle. Lower is faster. |
| `reverse` | `boolean` | `false` | If true, scrolls from left to right instead of right to left. |
| `pauseOnHover` | `boolean` | `true` | If true, the animation pauses when the user hovers over the container. |
