# Command

Command/search panel invoked by shortcut (similar to VS Code Command Palette).

## Basic Usage

<demo vue="../demos/command-basic.vue" />

## API

| Prop | Description | Type |
|------|-------------|------|
| modelValue | Whether visible | `boolean` |
| placeholder | Search input placeholder | `string` |
| groups | Groups and command items | `CommandGroup[]` |

CommandGroup: `{ name: string, items: CommandItem[] }`.  
CommandItem: `{ id: string, label: string, icon?: string, shortcut?: string }`.

Events: `select` (when an item is selected).
