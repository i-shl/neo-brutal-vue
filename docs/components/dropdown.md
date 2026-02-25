# Dropdown 下拉菜单

点击或悬停触发下拉菜单列表。

## 基础用法

```vue
<template>
  <NeoDropdown>
    <NeoButton>下拉菜单 <span class="arrow">▼</span></NeoButton>
    <template #dropdown>
      <div class="neo-dropdown-menu">
        <div class="item">选项一</div>
        <div class="item">选项二</div>
      </div>
    </template>
  </NeoDropdown>
</template>
```

具体 API 以组件实现为准，常见属性：`trigger`（click/hover）、`placement`、`disabled` 等。插槽：默认（触发元素）、`dropdown`（下拉内容）。
