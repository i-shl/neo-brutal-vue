# Card

Content container with title, subtitle, and slots.

## Basic Usage

<demo vue="../demos/card-basic.vue" />

## Variant

`default`, `flat`, `elevated`, `gradient`, `colored`.

## Slots

- `header`: Custom header
- `title`: Title
- `sub-title`: Subtitle
- `footer`: Footer
- default: Body content

## No Header

<demo vue="../demos/card-no-header.vue" />

Set `show-header="false"` to hide the header.

## API

| Prop | Description | Type |
|------|-------------|------|
| title | Title | `string` |
| subTitle | Subtitle | `string` |
| showHeader | Whether to show header | `boolean` |
| showFooter | Whether to show footer | `boolean` |
| shadow | Shadow | `boolean \| 'hover' \| 'never'` |
| bordered | Bordered | `boolean` |
| variant | Variant | `CardVariant` |
