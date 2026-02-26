# Backtop

Button to scroll back to top after scrolling the page.

## Basic Usage

<demo vue="../demos/backtop-basic.vue" />

## Custom Position & Visibility Height

<demo vue="../demos/backtop-custom.vue" />

## Specify Scroll Container

If scrolling happens inside a specific container, use `target` to specify the container selector.

## API

| Prop | Description | Type |
|------|-------------|------|
| target | Selector for scroll container | `string` |
| visibilityHeight | Show after scrolling past this height | `number` |
| right | Distance from right | `number` |
| bottom | Distance from bottom | `number` |
