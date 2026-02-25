// NeoBrutal Vue - Component Types

import type { ExtractPropTypes, PropType } from 'vue'

// ==================== Size Types ====================
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// ==================== Button Types ====================
export type ButtonType = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'default' | 'neo' | 'pink' | 'purple' | 'blue' | 'orange' | 'green'
export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'soft'
export type ButtonShape = 'default' | 'round' | 'circle' | 'sharp'

export interface ButtonProps {
  type?: ButtonType
  variant?: ButtonVariant
  size?: ComponentSize
  shape?: ButtonShape
  disabled?: boolean
  loading?: boolean
  block?: boolean
  href?: string
  target?: string
  nativeType?: 'button' | 'submit' | 'reset'
  icon?: string
  iconPosition?: 'left' | 'right'
}

// ==================== Input Types ====================
export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
export type InputShape = 'default' | 'round' | 'pill'

export interface InputProps {
  modelValue?: string | number
  type?: InputType
  size?: ComponentSize
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  placeholder?: string
  maxlength?: number | string
  minlength?: number | string
  showWordLimit?: boolean
  prefix?: string
  suffix?: string
  prepend?: string
  append?: string
  shape?: InputShape
}

// ==================== Select Types ====================
export interface SelectOption {
  label: string
  value: string | number | boolean
  disabled?: boolean
  [key: string]: any
}

export interface SelectProps {
  modelValue?: string | number | boolean | Array<string | number>
  options?: SelectOption[]
  multiple?: boolean
  collapseTags?: boolean
  filterable?: boolean
  allowCreate?: boolean
  size?: ComponentSize
  disabled?: boolean
  placeholder?: string
  clearable?: boolean
  noDataText?: string
  noMatchText?: string
}

// ==================== Checkbox Types ====================
export interface CheckboxOption {
  label: string
  value: string | number | boolean
  disabled?: boolean
  [key: string]: any
}

export interface CheckboxProps {
  modelValue?: boolean | Array<string | number>
  label?: string | number | boolean
  disabled?: boolean
  indeterminate?: boolean
  size?: ComponentSize
  border?: boolean
  trueValue?: any
  falseValue?: any
}

// ==================== Radio Types ====================
export interface RadioOption {
  label: string
  value: string | number | boolean
  disabled?: boolean
}

export interface RadioProps {
  modelValue?: string | number | boolean
  label?: string | number | boolean
  disabled?: boolean
  size?: ComponentSize
  border?: boolean
}

// ==================== Switch Types ====================
export interface SwitchProps {
  modelValue?: boolean | string | number
  disabled?: boolean
  size?: ComponentSize
  activeValue?: boolean | string | number
  inactiveValue?: boolean | string | number
 
  activeText?: string
  inactiveText?: string
}

// ==================== Slider Types ====================
export interface SliderProps {
  modelValue?: number | number[]
  min?: number
  max?: number
  step?: number
  showInput?: boolean
  showStops?: boolean
  showTooltip?: boolean
  disabled?: boolean
  size?: ComponentSize
}

// ==================== Rate Types ====================
export interface RateProps {
  modelValue?: number
  max?: number
  allowHalf?: boolean
  disabled?: boolean
  color?: string
  voidColor?: string
}

// ==================== Upload Types ====================
export interface UploadProps {
  action?: string
  drag?: boolean
  multiple?: boolean
  accept?: string
  limit?: number
}

// ==================== Card Types ====================
export type CardVariant = 'default' | 'flat' | 'elevated' | 'gradient' | 'colored'

export interface CardProps {
  title?: string
  subTitle?: string
  shadow?: boolean | 'hover' | 'never'
  bordered?: boolean
  variant?: CardVariant
  bodyStyle?: string | object
  headerStyle?: string | object
  bodyClass?: string
  headerClass?: string
}

// ==================== Dialog Types ====================
export interface DialogProps {
  modelValue?: boolean
  title?: string
  width?: string | number
  top?: string
  modal?: boolean
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
  showClose?: boolean
  destroyOnClose?: boolean
  alignCenter?: boolean
  draggable?: boolean
}

// ==================== Drawer Types ====================
export interface DrawerProps {
  modelValue?: boolean
  title?: string
  direction?: 'ltr' | 'rtl' | 'ttb' | 'btt'
  size?: string | number
  modal?: boolean
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
  showClose?: boolean
  destroyOnClose?: boolean
  withHeader?: boolean
}

// ==================== Message Types ====================
export type MessageType = 'success' | 'warning' | 'error' | 'info'

export interface MessageOptions {
  message: string
  type?: MessageType
  duration?: number
  showClose?: boolean
  onClose?: () => void
}

// ==================== Alert Types ====================
export type AlertType = 'success' | 'warning' | 'error' | 'info'

export interface AlertProps {
  title?: string
  description?: string
  type?: AlertType
  closable?: boolean
  closeText?: string
  showIcon?: boolean
  effect?: 'light' | 'dark'
}

// ==================== Tag Types ====================
export type TagType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
export type TagSize = 'xs' | 'sm' | 'md' | 'lg'
export type TagEffect = 'light' | 'dark' | 'plain'

export interface TagProps {
  type?: TagType
  size?: TagSize
  effect?: TagEffect
  closable?: boolean
  hit?: boolean
  color?: string
  disableTransitions?: boolean
}

// ==================== Badge Types ====================
export interface BadgeProps {
  value?: string | number
  max?: number
  isDot?: boolean
  hidden?: boolean
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
}

// ==================== Avatar Types ====================
export interface AvatarProps {
  src?: string
  icon?: string
  size?: ComponentSize | number
  shape?: 'circle' | 'square'
  alt?: string
  error?: boolean
}

// ==================== Progress Types ====================
export interface ProgressProps {
  percentage?: number
  format?: (percentage: number) => string
  status?: 'success' | 'warning' | 'exception'
  strokeWidth?: number
  showText?: boolean
  textInside?: boolean
  color?: string | string[]
}

// ==================== Loading Types ====================
export interface LoadingOptions {
  text?: string
  fullscreen?: boolean
  lock?: boolean
  background?: string
  customClass?: string
}

// ==================== Table Types ====================
export interface TableColumn {
  prop?: string
  label?: string
  width?: string | number
  minWidth?: string | number
  fixed?: boolean | 'left' | 'right'
  sortable?: boolean | 'asc' | 'desc'
  formatter?: (row: any, column: any, cellValue: any, index: number) => string
  slots?: {
    default?: string
    header?: string
  }
}

export interface TableProps {
  data?: any[]
  columns?: TableColumn[]
  stripe?: boolean
  border?: boolean
  highlightCurrentRow?: boolean
  rowClassName?: string | ((row: any, rowIndex: number) => string)
  rowKey?: string | ((row: any) => string)
  showHeader?: boolean
  height?: string | number
  maxHeight?: string | number
}

// ==================== Descriptions Types ====================
export interface DescriptionsProps {
  title?: string
  column?: number
  border?: boolean
  direction?: 'horizontal' | 'vertical'
}

export interface DescriptionsItemProps {
  label?: string
  span?: number
}

// ==================== Tree Types ====================
export interface TreeData {
  id: string | number
  label: string
  children?: TreeData[]
  expanded?: boolean
}

export interface TreeProps {
  data: TreeData[]
  showLine?: boolean
  selectable?: boolean
}

// ==================== Tabs Types ====================
export interface TabPane {
  name: string
  label: string
  disabled?: boolean
  closable?: boolean
}

export interface TabsProps {
  modelValue?: string
  type?: 'line' | 'card' | 'border-card'
  tabPosition?: 'top' | 'right' | 'bottom' | 'left'
  addable?: boolean
  editable?: boolean
}

// ==================== Menu Types ====================
export interface MenuItem {
  index: string
  icon?: string
  title?: string
  disabled?: boolean
  children?: MenuItem[]
}

export interface MenuProps {
  mode?: 'horizontal' | 'vertical'
  collapse?: boolean
  backgroundColor?: string
  textColor?: string
  activeTextColor?: string
  defaultActive?: string
  defaultOpeneds?: string[]
}

// ==================== Pagination Types ====================
export interface PaginationProps {
  current?: number
  pageSize?: number
  total?: number
  pageSizes?: number[]
  layout?: string
  background?: boolean
  small?: boolean
}

// ==================== Breadcrumb Types ====================
export interface BreadcrumbItem {
  to?: string
  replace?: boolean
}

export interface BreadcrumbProps {
  separator?: string
  separatorIcon?: string
}

// ==================== Steps Types ====================
export interface Step {
  title?: string
  description?: string
  icon?: string
  status?: 'wait' | 'process' | 'finish' | 'error' | 'success'
}

export interface StepsProps {
  space?: number | string
  direction?: 'horizontal' | 'vertical'
  active?: number
  processStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
  finishStatus?: 'wait' | 'process' | 'finish' | 'error' | 'success'
  alignCenter?: boolean
  simple?: boolean
}

// ==================== Collapse Types ====================
export interface CollapseItem {
  name: string
  title?: string
  disabled?: boolean
}

export interface CollapseProps {
  modelValue?: string | string[]
  accordion?: boolean
  shadow?: boolean
  bordered?: boolean
  animation?: boolean
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: string | string[]): void
}

export interface AccordionProps {
  modelValue?: string | number | (string | number)[]
  accordion?: boolean
  shadow?: boolean
  bordered?: boolean
  animation?: boolean
}

export interface AccordionEmits {
  (e: 'update:modelValue', value: string | number | (string | number)[]): void
}

// ==================== Form Types ====================
export interface FormItem {
  label?: string
  prop?: string
  rules?: any
  required?: boolean
  error?: string
}

export interface FormProps {
  model?: Record<string, any>
  labelWidth?: string | number
  labelPosition?: 'left' | 'right' | 'top'
  labelSuffix?: string
  inline?: boolean
  size?: ComponentSize
  disabled?: boolean
}

// ==================== Tooltip Types ====================
export interface TooltipProps {
  content?: string
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  trigger?: 'hover' | 'click' | 'focus' | 'manual'
  effect?: 'light' | 'dark'
  transition?: string
  visible?: boolean
  disabled?: boolean
  offset?: number
  showAfter?: number
  hideAfter?: number
}

// ==================== Toast Types ====================
export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'default'
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'

export interface ToastProps {
  type?: ToastType
  title?: string
  message?: string
  duration?: number
  closable?: boolean
  position?: ToastPosition
  icon?: boolean
}

// ==================== Result Types ====================
export interface ResultProps {
  title?: string
  subTitle?: string
  status?: 'success' | 'warning' | 'error' | 'info' | '404' | '403' | '500'
}

export interface ToastEmits {
  (e: 'close'): void
}

// ==================== Popover Types ====================
export interface PopoverProps {
  content?: string
  trigger?: 'hover' | 'click' | 'focus' | 'manual'
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  title?: string
  width?: string | number
  effect?: 'light' | 'dark'
  transition?: string
  visible?: boolean
  disabled?: boolean
}

// ==================== Carousel Types ====================
export interface CarouselItem {
  image: string
  title?: string
}

export interface CarouselProps {
  items: CarouselItem[]
  active?: number
  height?: string | number
}

// ==================== Command Palette Types ====================
export interface CommandItem {
  id: string
  label: string
  icon?: string
  shortcut?: string
}

export interface CommandGroup {
  name: string
  items: CommandItem[]
}

export interface CommandProps {
  modelValue: boolean
  placeholder?: string
  groups: CommandGroup[]
}

// ==================== Statistic Types ====================
export interface StatisticProps {
  title?: string
  value?: string | number
  precision?: number
  prefix?: string
  suffix?: string
  valueStyle?: any
}

// ==================== Backtop Types ====================
export interface BacktopProps {
  target?: string
  visibilityHeight?: number
  right?: number
  bottom?: number
}

// ==================== ScrollArea Types ====================
export interface ScrollAreaProps {
  height?: string | number
  maxHeight?: string | number
}

// ==================== Utility Types ====================
export type MaybeArray<T> = T | T[]
export type MaybePromise<T> = T | Promise<T>
export type Writable<T> = {
  -readonly [P in keyof T]: T[P]
}

export interface CallbackParams<T extends any[]> {
  args: T
  instance: any
}

// ==================== Component Emit Types ====================
export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void
  (e: 'update:modelValue', value: boolean): void
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'input', value: string): void
  (e: 'change', value: string): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
  (e: 'clear'): void
}

export interface SelectEmits {
  (e: 'update:modelValue', value: any): void
  (e: 'change', value: any): void
  (e: 'clear'): void
}

export interface DialogEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
  (e: 'open'): void
  (e: 'opened'): void
}

export interface DrawerEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
  (e: 'open'): void
  (e: 'opened'): void
}
