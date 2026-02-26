# Command 命令面板

通过快捷键唤出的命令/搜索面板（类似 VS Code Command Palette）。

## 基础用法

<demo vue="../../demos/command-basic.vue" />

## API

| 属性 | 说明 | 类型 |
|------|------|------|
| modelValue | 是否显示 | `boolean` |
| placeholder | 搜索框占位符 | `string` |
| groups | 分组与命令项 | `CommandGroup[]` |

CommandGroup：`{ name: string, items: CommandItem[] }`。  
CommandItem：`{ id: string, label: string, icon?: string, shortcut?: string }`。

事件：`select`（选中某项时）。
