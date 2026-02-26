# InputOTP

The brutal, clunky-in-a-good-way fields for one time passwords or verification codes.

## Basic Usage

The component renders multiple square input boxes that auto-focus linearly when a user types or deletes characters. It also handles pasting seamlessly.

<demo vue="../demos/input-otp-basic.vue" />

## API

### Props

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `v-model` | `string` | `""` | The bound token value. |
| `length` | `number` | `6` | Number of input fields to render. |
| `disabled` | `boolean` | `false` | Whether the input is disabled. |

### Events

| Event | Parameters | Description |
| --- | --- | --- |
| `complete` | `(value: string)` | Fired when all fields are filled. |
| `update:modelValue` | `(value: string)` | Fired on every input change. |
