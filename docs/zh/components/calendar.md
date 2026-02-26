# Calendar 日历

日历组件，可选日期、展示日程等。

## 基础用法

<demo vue="../../demos/calendar-basic.vue" />

## 周起始日

通过 `firstDayOfWeek` 设置：`0` 为周日，`1` 为周一。

<demo vue="../../demos/calendar-first-day.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 当前日期 | `Date` |
| firstDayOfWeek | 周起始日：0=周日，1=周一 | `0 \| 1` |

事件：`update:modelValue`、`select` 等（以组件实现为准）。
