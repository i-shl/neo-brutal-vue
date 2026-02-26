import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, { locale: 'en-US' })
    },
  },
  vite: {
    resolve: {
      alias: {
        'neo-brutal-vue': path.resolve(__dirname, '../../src/index.ts'),
      },
    },
  },
  title: 'NeoBrutal Vue',
  description: 'Neobrutalism style Vue 3 UI component library',
  base: '/',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'NeoBrutal Vue',
      description: 'Neobrutalism style Vue 3 UI component library',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/quickstart' },
          { text: 'Components', link: '/components/button' },
          { text: 'GitHub', link: 'https://github.com/i-shl/neo-brutal-vue' },
        ],
        sidebar: [
          {
            text: 'Guide',
            items: [
              { text: 'Quick Start', link: '/guide/quickstart' },
              { text: 'Installation', link: '/guide/installation' },
              { text: 'Theme & Variables', link: '/guide/theme' },
            ],
          },
          {
            text: 'Base',
            items: [
              { text: 'Button', link: '/components/button' },
              { text: 'ButtonGroup', link: '/components/button-group' },
              { text: 'Link', link: '/components/link' },
              { text: 'Space', link: '/components/space' },
              { text: 'Divider', link: '/components/divider' },
            ],
          },
          {
            text: 'Form',
            items: [
              { text: 'Input', link: '/components/input' },
              { text: 'InputGroup', link: '/components/input-group' },
              { text: 'InputNumber', link: '/components/input-number' },
              { text: 'InputOTP', link: '/components/input-otp' },
              { text: 'Textarea', link: '/components/textarea' },
              { text: 'Select', link: '/components/select' },
              { text: 'Cascader', link: '/components/cascader' },
              { text: 'ColorPicker', link: '/components/color-picker' },
              { text: 'Radio', link: '/components/radio' },
              { text: 'Checkbox', link: '/components/checkbox' },
              { text: 'Switch', link: '/components/switch' },
              { text: 'Slider', link: '/components/slider' },
              { text: 'Rate', link: '/components/rate' },
              { text: 'Upload', link: '/components/upload' },
            ],
          },
          {
            text: 'Layout',
            items: [
              { text: 'Card', link: '/components/card' },
              { text: 'Row', link: '/components/row' },
              { text: 'Col', link: '/components/col' },
              { text: 'Waterfall', link: '/components/waterfall' },
              { text: 'Collapse', link: '/components/collapse' },
              { text: 'CollapseItem', link: '/components/collapse-item' },
              { text: 'Accordion', link: '/components/accordion' },
              { text: 'AccordionItem', link: '/components/accordion-item' },
              { text: 'ScrollArea', link: '/components/scroll-area' },
              { text: 'Resizable', link: '/components/resizable' },
            ],
          },
          {
            text: 'Data Display',
            items: [
              { text: 'Tag', link: '/components/tag' },
              { text: 'Badge', link: '/components/badge' },
              { text: 'Progress', link: '/components/progress' },
              { text: 'Avatar', link: '/components/avatar' },
              { text: 'Empty', link: '/components/empty' },
              { text: 'Skeleton', link: '/components/skeleton' },
              { text: 'Timeline', link: '/components/timeline' },
              { text: 'TimelineItem', link: '/components/timeline-item' },
              { text: 'Descriptions', link: '/components/descriptions' },
              { text: 'DescriptionsItem', link: '/components/descriptions-item' },
              { text: 'Tree', link: '/components/tree' },
              { text: 'Table', link: '/components/table' },
              { text: 'Carousel', link: '/components/carousel' },
              { text: 'Statistic', link: '/components/statistic' },
              { text: 'Marquee', link: '/components/marquee' },
            ],
          },
          {
            text: 'Feedback',
            items: [
              { text: 'Alert', link: '/components/alert' },
              { text: 'Dialog', link: '/components/dialog' },
              { text: 'Loading', link: '/components/loading' },
              { text: 'Toast', link: '/components/toast' },
              { text: 'Result', link: '/components/result' },
              { text: 'Tour', link: '/components/tour' },
            ],
          },
          {
            text: 'Overlay',
            items: [
              { text: 'Tooltip', link: '/components/tooltip' },
              { text: 'Popover', link: '/components/popover' },
              { text: 'HoverCard', link: '/components/hover-card' },
              { text: 'ContextMenu', link: '/components/context-menu' },
              { text: 'Drawer', link: '/components/drawer' },
            ],
          },
          {
            text: 'Navigation',
            items: [
              { text: 'Tabs', link: '/components/tabs' },
              { text: 'TabPane', link: '/components/tab-pane' },
              { text: 'Breadcrumb', link: '/components/breadcrumb' },
              { text: 'BreadcrumbItem', link: '/components/breadcrumb-item' },
              { text: 'Pagination', link: '/components/pagination' },
              { text: 'Steps', link: '/components/steps' },
              { text: 'Step', link: '/components/step' },
              { text: 'Menu', link: '/components/menu' },
              { text: 'MenuItem', link: '/components/menu-item' },
              { text: 'Dropdown', link: '/components/dropdown' },
            ],
          },
          {
            text: 'Other',
            items: [
              { text: 'Calendar', link: '/components/calendar' },
              { text: 'Command', link: '/components/command' },
              { text: 'Backtop', link: '/components/backtop' },
            ],
          },
        ],
      },
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'NeoBrutal Vue',
      description: 'Neobrutalism 风格的 Vue 3 组件库',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/quickstart' },
          { text: '组件', link: '/zh/components/button' },
          { text: 'GitHub', link: 'https://github.com/i-shl/neo-brutal-vue' },
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '快速开始', link: '/zh/guide/quickstart' },
              { text: '安装', link: '/zh/guide/installation' },
              { text: '主题与变量', link: '/zh/guide/theme' },
            ],
          },
          {
            text: '基础组件',
            items: [
              { text: 'Button 按钮', link: '/zh/components/button' },
              { text: 'ButtonGroup 按钮组', link: '/zh/components/button-group' },
              { text: 'Link 链接', link: '/zh/components/link' },
              { text: 'Space 间距', link: '/zh/components/space' },
              { text: 'Divider 分割线', link: '/zh/components/divider' },
            ],
          },
          {
            text: '表单组件',
            items: [
              { text: 'Input 输入框', link: '/zh/components/input' },
              { text: 'InputGroup 输入框组', link: '/zh/components/input-group' },
              { text: 'InputNumber 数字输入框', link: '/zh/components/input-number' },
              { text: 'InputOTP 验证码输入框', link: '/zh/components/input-otp' },
              { text: 'Textarea 文本域', link: '/zh/components/textarea' },
              { text: 'Select 选择器', link: '/zh/components/select' },
              { text: 'Cascader 级联选择器', link: '/zh/components/cascader' },
              { text: 'ColorPicker 颜色选择器', link: '/zh/components/color-picker' },
              { text: 'Radio 单选框', link: '/zh/components/radio' },
              { text: 'Checkbox 复选框', link: '/zh/components/checkbox' },
              { text: 'Switch 开关', link: '/zh/components/switch' },
              { text: 'Slider 滑块', link: '/zh/components/slider' },
              { text: 'Rate 评分', link: '/zh/components/rate' },
              { text: 'Upload 上传', link: '/zh/components/upload' },
            ],
          },
          {
            text: '布局组件',
            items: [
              { text: 'Card 卡片', link: '/zh/components/card' },
              { text: 'Row 行', link: '/zh/components/row' },
              { text: 'Col 列', link: '/zh/components/col' },
              { text: 'Waterfall 瀑布流布局', link: '/zh/components/waterfall' },
              { text: 'Collapse 折叠面板', link: '/zh/components/collapse' },
              { text: 'CollapseItem 折叠项', link: '/zh/components/collapse-item' },
              { text: 'Accordion 手风琴', link: '/zh/components/accordion' },
              { text: 'AccordionItem 手风琴项', link: '/zh/components/accordion-item' },
              { text: 'ScrollArea 滚动区域', link: '/zh/components/scroll-area' },
              { text: 'Resizable 可缩放面板', link: '/zh/components/resizable' },
            ],
          },
          {
            text: '数据展示',
            items: [
              { text: 'Tag 标签', link: '/zh/components/tag' },
              { text: 'Badge 徽标', link: '/zh/components/badge' },
              { text: 'Progress 进度条', link: '/zh/components/progress' },
              { text: 'Avatar 头像', link: '/zh/components/avatar' },
              { text: 'Empty 空状态', link: '/zh/components/empty' },
              { text: 'Skeleton 骨架屏', link: '/zh/components/skeleton' },
              { text: 'Timeline 时间轴', link: '/zh/components/timeline' },
              { text: 'TimelineItem 时间轴项', link: '/zh/components/timeline-item' },
              { text: 'Descriptions 描述列表', link: '/zh/components/descriptions' },
              { text: 'DescriptionsItem 描述项', link: '/zh/components/descriptions-item' },
              { text: 'Tree 树形控件', link: '/zh/components/tree' },
              { text: 'Table 表格', link: '/zh/components/table' },
              { text: 'Carousel 走马灯', link: '/zh/components/carousel' },
              { text: 'Statistic 统计数值', link: '/zh/components/statistic' },
              { text: 'Marquee 跑马灯', link: '/zh/components/marquee' },
            ],
          },
          {
            text: '反馈组件',
            items: [
              { text: 'Alert 警告提示', link: '/zh/components/alert' },
              { text: 'Dialog 对话框', link: '/zh/components/dialog' },
              { text: 'Loading 加载', link: '/zh/components/loading' },
              { text: 'Toast 轻提示', link: '/zh/components/toast' },
              { text: 'Result 结果页', link: '/zh/components/result' },
              { text: 'Tour 漫游式引导', link: '/zh/components/tour' },
            ],
          },
          {
            text: '浮层组件',
            items: [
              { text: 'Tooltip 文字提示', link: '/zh/components/tooltip' },
              { text: 'Popover 气泡卡片', link: '/zh/components/popover' },
              { text: 'HoverCard 悬浮卡片', link: '/zh/components/hover-card' },
              { text: 'ContextMenu 右键菜单', link: '/zh/components/context-menu' },
              { text: 'Drawer 抽屉', link: '/zh/components/drawer' },
            ],
          },
          {
            text: '导航组件',
            items: [
              { text: 'Tabs 标签页', link: '/zh/components/tabs' },
              { text: 'TabPane 标签页项', link: '/zh/components/tab-pane' },
              { text: 'Breadcrumb 面包屑', link: '/zh/components/breadcrumb' },
              { text: 'BreadcrumbItem 面包屑项', link: '/zh/components/breadcrumb-item' },
              { text: 'Pagination 分页', link: '/zh/components/pagination' },
              { text: 'Steps 步骤条', link: '/zh/components/steps' },
              { text: 'Step 步骤项', link: '/zh/components/step' },
              { text: 'Menu 菜单', link: '/zh/components/menu' },
              { text: 'MenuItem 菜单项', link: '/zh/components/menu-item' },
              { text: 'Dropdown 下拉菜单', link: '/zh/components/dropdown' },
            ],
          },
          {
            text: '其他',
            items: [
              { text: 'Calendar 日历', link: '/zh/components/calendar' },
              { text: 'Command 命令面板', link: '/zh/components/command' },
              { text: 'Backtop 回到顶部', link: '/zh/components/backtop' },
            ],
          },
        ],
      },
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/i-shl/neo-brutal-vue' },
    ],
    footer: {
      message: 'MIT License',
      copyright: 'Copyright © 2025 NeoBrutal Vue',
    },
  },
})
