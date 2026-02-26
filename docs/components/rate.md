# Rate

Star rating component.

## Basic Usage

<demo vue="../demos/rate-basic.vue" />

## Half Star & Custom Count

<demo vue="../demos/rate-half.vue" />

## Read Only

<demo vue="../demos/rate-readonly.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Current score | `number` |
| max | Maximum score (number of stars) | `number` |
| allowHalf | Whether to allow half selection | `boolean` |
| disabled | Disabled | `boolean` |
| color | Selected color | `string` |
| voidColor | Unselected color | `string` |

Events: `update:modelValue`, `change`.
