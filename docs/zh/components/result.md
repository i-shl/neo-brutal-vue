# Result 结果页

用于反馈操作结果（成功、失败、403、404、500 等）。

## 基础用法

<demo vue="../../demos/result-basic.vue" />

## 不同状态

<demo vue="../../demos/result-statuses.vue" />

## 自定义操作区

<demo vue="../../demos/result-extra.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| status | 状态 | `'success' \| 'warning' \| 'error' \| 'info' \| '404' \| '403' \| '500'` |
| title | 标题 | `string` |
| subTitle | 副标题 | `string` |

插槽：`extra`（底部操作区）。
