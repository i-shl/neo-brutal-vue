# Result

Feedback for operation results (success, error, 403, 404, 500, etc.).

## Basic Usage

```vue
<template>
  <NeoResult status="success" title="Success" sub-title="Your request has been submitted" />
</template>
```

## Different Statuses

```vue
<template>
  <NeoResult status="error" title="Submission Failed" sub-title="Please try again later" />
  <NeoResult status="404" title="Page Not Found" />
  <NeoResult status="403" title="No Permission" />
</template>
```

## Custom Action Area

```vue
<template>
  <NeoResult status="success" title="Success">
    <template #extra>
      <NeoButton type="primary">Back to Home</NeoButton>
    </template>
  </NeoResult>
</template>
```

## API

| Prop | Description | Type |
|------|-------------|------|
| status | Status | `'success' \| 'warning' \| 'error' \| 'info' \| '404' \| '403' \| '500'` |
| title | Title | `string` |
| subTitle | Subtitle | `string` |

Slots: `extra` (bottom action area).
