# HoverCard

A sophisticated hovering overlay block providing auxiliary information.

## Basic Usage

HoverCards behave similarly to Popovers but are triggered strictly by `mouseenter` events rather than clicks, often used to display rich previews or user profiles.

<demo vue="../demos/hover-card-basic.vue" />

## API

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Alignment position of the hover card. |
| `width` | `string \| number` | `''` | Fixed width of the card. |
| `openDelay` | `number` | `200` | Delay in ms before the card appears on hover. |
| `closeDelay` | `number` | `300` | Delay in ms before the card vanishes on unhover. |

### Slots

| Name | Description |
| --- | --- |
| `default` | The trigger element the user points their mouse at. |
| `content` | The rich data payload rendered inside the thick border card box. |
