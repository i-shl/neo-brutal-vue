// NeoBrutal Vue - Component Exports
import 'normalize.css'
import './styles/variables.css'

// Base Components
export { default as NeoButton } from './components/base/Button.vue'
export { default as NeoButtonGroup } from './components/base/ButtonGroup.vue'
export { default as NeoLink } from './components/base/Link.vue'
export { default as NeoSpace } from './components/base/Space.vue'
export { default as NeoDivider } from './components/base/Divider.vue'

// Form Components
export { default as NeoInput } from './components/form/Input.vue'
export { default as NeoInputGroup } from './components/form/InputGroup.vue'
export { default as NeoInputNumber } from './components/form/InputNumber.vue'
export { default as NeoInputOTP } from './components/form/InputOTP.vue'
export { default as NeoTextarea } from './components/form/Textarea.vue'
export { default as NeoSelect } from './components/form/Select.vue'
export { default as NeoRadio } from './components/form/Radio.vue'
export { default as NeoCheckbox } from './components/form/Checkbox.vue'
export { default as NeoSwitch } from './components/form/Switch.vue'
export { default as NeoSlider } from './components/form/Slider.vue'
export { default as NeoRate } from './components/form/Rate.vue'
export { default as NeoUpload } from './components/form/Upload.vue'

// Layout Components
export { default as NeoCard } from './components/layout/Card.vue'
export { default as NeoRow } from './components/layout/Row.vue'
export { default as NeoCol } from './components/layout/Col.vue'
export { default as NeoCollapse } from './components/layout/Collapse.vue'
export { default as NeoCollapseItem } from './components/layout/CollapseItem.vue'
export { default as NeoAccordion } from './components/layout/Accordion.vue'
export { default as NeoAccordionItem } from './components/layout/AccordionItem.vue'
export { default as NeoScrollArea } from './components/layout/ScrollArea.vue'
export { default as NeoResizable } from './components/layout/Resizable.vue'

// Data Display Components
export { default as NeoTag } from './components/data-display/Tag.vue'
export { default as NeoBadge } from './components/data-display/Badge.vue'
export { default as NeoProgress } from './components/data-display/Progress.vue'
export { default as NeoAvatar } from './components/data-display/Avatar.vue'
export { default as NeoEmpty } from './components/data-display/Empty.vue'
export { default as NeoSkeleton } from './components/data-display/Skeleton.vue'
export { default as NeoTimeline } from './components/data-display/Timeline.vue'
export { default as NeoTimelineItem } from './components/data-display/TimelineItem.vue'
export { default as NeoDescriptions } from './components/data-display/Descriptions.vue'
export { default as NeoDescriptionsItem } from './components/data-display/DescriptionsItem.vue'
export { default as NeoTree } from './components/data-display/Tree.vue'
export { default as NeoTable } from './components/data-table/Table.vue'
export { default as NeoCarousel } from './components/data-display/Carousel.vue'
export { default as NeoStatistic } from './components/data-display/Statistic.vue'
export { default as NeoMarquee } from './components/data-display/Marquee.vue'

// Feedback Components
export { default as NeoAlert } from './components/feedback/Alert.vue'
export { default as NeoDialog } from './components/feedback/Dialog.vue'
export { default as NeoLoading } from './components/feedback/Loading.vue'
export { default as NeoToast } from './components/feedback/Toast.vue'
export { default as NeoResult } from './components/feedback/Result.vue'
export { default as NeoTooltip } from './components/overlays/Tooltip.vue'
export { default as NeoDrawer } from './components/overlays/Drawer.vue'
export { default as NeoPopover } from './components/overlays/Popover.vue'
export { default as NeoHoverCard } from './components/overlays/HoverCard.vue'
export { default as NeoContextMenu } from './components/overlays/ContextMenu.vue'

// Navigation Components
export { default as NeoTabs } from './components/navigation/Tabs.vue'
export { default as NeoTabPane } from './components/navigation/TabPane.vue'
export { default as NeoBreadcrumb } from './components/navigation/Breadcrumb.vue'
export { default as NeoBreadcrumbItem } from './components/navigation/BreadcrumbItem.vue'
export { default as NeoPagination } from './components/navigation/Pagination.vue'
export { default as NeoSteps } from './components/navigation/Steps.vue'
export { default as NeoStep } from './components/navigation/Step.vue'
export { default as NeoMenu } from './components/navigation/Menu.vue'
export { default as NeoMenuItem } from './components/navigation/MenuItem.vue'
export { default as NeoSubMenu } from './components/navigation/SubMenu.vue'
export { default as NeoDropdown } from './components/navigation/Dropdown.vue'
export { default as NeoCalendar } from './components/others/Calendar.vue'
export { default as NeoCommand } from './components/others/Command.vue'
export { default as NeoBacktop } from './components/others/Backtop.vue'

// Types
export * from './types'

// Plugin (default export for app.use(NeoBrutalVue))
export { default } from './install'