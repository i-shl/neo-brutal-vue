// NeoBrutal Vue - Vue Plugin
import type { App, Component } from 'vue'

// Base Components
import NeoButton from './components/base/Button.vue'
import NeoButtonGroup from './components/base/ButtonGroup.vue'
import NeoLink from './components/base/Link.vue'
import NeoSpace from './components/base/Space.vue'
import NeoDivider from './components/base/Divider.vue'

// Form Components
import NeoInput from './components/form/Input.vue'
import NeoInputGroup from './components/form/InputGroup.vue'
import NeoInputNumber from './components/form/InputNumber.vue'
import NeoInputOTP from './components/form/InputOTP.vue'
import NeoTextarea from './components/form/Textarea.vue'
import NeoSelect from './components/form/Select.vue'
import NeoRadio from './components/form/Radio.vue'
import NeoCheckbox from './components/form/Checkbox.vue'
import NeoSwitch from './components/form/Switch.vue'
import NeoSlider from './components/form/Slider.vue'
import NeoRate from './components/form/Rate.vue'
import NeoUpload from './components/form/Upload.vue'

// Layout Components
import NeoCard from './components/layout/Card.vue'
import NeoRow from './components/layout/Row.vue'
import NeoCol from './components/layout/Col.vue'
import NeoCollapse from './components/layout/Collapse.vue'
import NeoCollapseItem from './components/layout/CollapseItem.vue'
import NeoAccordion from './components/layout/Accordion.vue'
import NeoAccordionItem from './components/layout/AccordionItem.vue'
import NeoScrollArea from './components/layout/ScrollArea.vue'
import NeoResizable from './components/layout/Resizable.vue'

// Data Display Components
import NeoTag from './components/data-display/Tag.vue'
import NeoBadge from './components/data-display/Badge.vue'
import NeoProgress from './components/data-display/Progress.vue'
import NeoAvatar from './components/data-display/Avatar.vue'
import NeoEmpty from './components/data-display/Empty.vue'
import NeoSkeleton from './components/data-display/Skeleton.vue'
import NeoTimeline from './components/data-display/Timeline.vue'
import NeoTimelineItem from './components/data-display/TimelineItem.vue'
import NeoDescriptions from './components/data-display/Descriptions.vue'
import NeoDescriptionsItem from './components/data-display/DescriptionsItem.vue'
import NeoTree from './components/data-display/Tree.vue'
import NeoTable from './components/data-table/Table.vue'
import NeoCarousel from './components/data-display/Carousel.vue'
import NeoStatistic from './components/data-display/Statistic.vue'
import NeoMarquee from './components/data-display/Marquee.vue'

// Feedback Components
import NeoAlert from './components/feedback/Alert.vue'
import NeoDialog from './components/feedback/Dialog.vue'
import NeoLoading from './components/feedback/Loading.vue'
import NeoToast from './components/feedback/Toast.vue'
import NeoResult from './components/feedback/Result.vue'
import NeoTooltip from './components/overlays/Tooltip.vue'
import NeoDrawer from './components/overlays/Drawer.vue'
import NeoPopover from './components/overlays/Popover.vue'
import NeoHoverCard from './components/overlays/HoverCard.vue'
import NeoContextMenu from './components/overlays/ContextMenu.vue'

// Navigation Components
import NeoTabs from './components/navigation/Tabs.vue'
import NeoTabPane from './components/navigation/TabPane.vue'
import NeoBreadcrumb from './components/navigation/Breadcrumb.vue'
import NeoBreadcrumbItem from './components/navigation/BreadcrumbItem.vue'
import NeoPagination from './components/navigation/Pagination.vue'
import NeoSteps from './components/navigation/Steps.vue'
import NeoStep from './components/navigation/Step.vue'
import NeoMenu from './components/navigation/Menu.vue'
import NeoMenuItem from './components/navigation/MenuItem.vue'
import NeoSubMenu from './components/navigation/SubMenu.vue'
import NeoDropdown from './components/navigation/Dropdown.vue'

// Others
import NeoCalendar from './components/others/Calendar.vue'
import NeoCommand from './components/others/Command.vue'
import NeoBacktop from './components/others/Backtop.vue'

import './styles/variables.css'

const components: Record<string, Component> = {
  // Base
  NeoButton,
  NeoButtonGroup,
  NeoLink,
  NeoSpace,
  NeoDivider,
  
  // Form
  NeoInput,
  NeoInputGroup,
  NeoInputNumber,
  NeoInputOTP,
  NeoTextarea,
  NeoSelect,
  NeoRadio,
  NeoCheckbox,
  NeoSwitch,
  NeoSlider,
  NeoRate,
  NeoUpload,
  
  // Layout
  NeoCard,
  NeoRow,
  NeoCol,
  NeoCollapse,
  NeoCollapseItem,
  NeoAccordion,
  NeoAccordionItem,
  NeoScrollArea,
  NeoResizable,
  
  // Data Display
  NeoTag,
  NeoBadge,
  NeoProgress,
  NeoAvatar,
  NeoEmpty,
  NeoSkeleton,
  NeoTimeline,
  NeoTimelineItem,
  NeoDescriptions,
  NeoDescriptionsItem,
  NeoTree,
  NeoTable,
  NeoCarousel,
  NeoStatistic,
  NeoMarquee,
  
  // Feedback
  NeoAlert,
  NeoDialog,
  NeoLoading,
  NeoToast,
  NeoResult,
  NeoTooltip,
  NeoDrawer,
  NeoPopover,
  NeoHoverCard,
  NeoContextMenu,
  
  // Navigation
  NeoTabs,
  NeoTabPane,
  NeoBreadcrumb,
  NeoBreadcrumbItem,
  NeoPagination,
  NeoSteps,
  NeoStep,
  NeoMenu,
  NeoMenuItem,
  NeoSubMenu,
  NeoDropdown,
  
  // Others
  NeoCalendar,
  NeoCommand,
  NeoBacktop,
}

export interface NeoBrutalVueOptions {
  /** 组件前缀，默认: Neo */
  prefix?: string
}

const install = (app: App, options: NeoBrutalVueOptions = {}) => {
  const { prefix = 'Neo' } = options
  
  // 注册所有组件
  Object.entries(components).forEach(([name, component]) => {
    const componentName = name.replace('Neo', prefix)
    app.component(componentName, component)
  })
}

export default install

// 导出所有组件以便按需引入
export * from './index'

// 版本信息
export const version = '1.0.1'
