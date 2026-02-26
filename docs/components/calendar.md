# Calendar

Calendar component. Date selection, schedule display, etc.

## Basic Usage

<demo vue="../demos/calendar-basic.vue" />

## First Day of Week

Set `firstDayOfWeek` to `0` (Sunday) or `1` (Monday).

<demo vue="../demos/calendar-first-day.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Current date | `Date` |
| firstDayOfWeek | First day of week: 0 = Sunday, 1 = Monday | `0 \| 1` |

Events: `update:modelValue`, `select`, etc. (refer to component implementation).
