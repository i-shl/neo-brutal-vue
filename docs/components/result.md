# Result

Feedback for operation results (success, error, 403, 404, 500, etc.).

## Basic Usage

<demo vue="../demos/result-basic.vue" />

## Different Statuses

<demo vue="../demos/result-statuses.vue" />

## Custom Action Area

<demo vue="../demos/result-extra.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| status | Status | `'success' \| 'warning' \| 'error' \| 'info' \| '404' \| '403' \| '500'` |
| title | Title | `string` |
| subTitle | Subtitle | `string` |

Slots: `extra` (bottom action area).
