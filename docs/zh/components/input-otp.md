# InputOTP 验证码输入框

用于一次性密码或硬核验证流程的单格字符输入组件。

## 基础用法

它提供独立的粗犷方形输入框，自带焦点追踪和黏贴拆解功能。当你聚核其中一个格子时，强烈的沉浸感油然而生。

<demo vue="../../demos/input-otp-basic.vue" />

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `v-model` | `string` | `""` | 双向绑定的验证码字符串。 |
| `length` | `number` | `6` | 要渲染的输入框数量。 |
| `disabled` | `boolean` | `false` | 禁用整个输入组件。 |

### Events

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| `complete` | `(value: string)` | 当所有输入框都被填满时触发。 |
| `update:modelValue` | `(value: string)` | 每次子输入框更新时触发。 |
