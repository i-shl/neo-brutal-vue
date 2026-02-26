# Resizable

A brutal layout block bounded by thick borders that users can rescale to fit their content needs.

## Basic Usage

The component is functionally identical to the native CSS `resize` property, except the resizer thumb uses the signature Neobrutalism dotted pattern instead of native browser graphics.

<demo vue="../demos/resizable-basic.vue" />

## API

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `direction` | `'both' \| 'horizontal' \| 'vertical' \| 'none'` | `'both'` | Allowable directions to stretch the container. |
| `minWidth` | `string` | `'200px'` | Defines minimum pixel/rem boundary. |
| `minHeight` | `string` | `'100px'` | Defines minimum vertical boundary. |
| `maxWidth` | `string` | `''` | Defines maximum horizontal boundary. |
| `maxHeight` | `string` | `''` | Defines maximum vertical boundary. |
