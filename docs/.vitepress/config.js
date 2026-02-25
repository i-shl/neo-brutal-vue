import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NeoBrutal Vue',
  description: 'Neobrutalism 风格的 Vue 3 组件库',
  base: '/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/quickstart' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/i-shl/neo-brutal-vue' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/quickstart' },
          { text: '安装', link: '/guide/installation' },
          { text: '主题与变量', link: '/guide/theme' },
        ],
      },
      {
        text: '基础组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Link 链接', link: '/components/link' },
          { text: 'Space 间距', link: '/components/space' },
          { text: 'Divider 分割线', link: '/components/divider' },
        ],
      },
      {
        text: '表单组件',
        items: [
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'InputNumber 数字输入框', link: '/components/input-number' },
          { text: 'Textarea 文本域', link: '/components/textarea' },
          { text: 'Select 选择器', link: '/components/select' },
          { text: 'Radio 单选框', link: '/components/radio' },
          { text: 'Checkbox 复选框', link: '/components/checkbox' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'Slider 滑块', link: '/components/slider' },
          { text: 'Rate 评分', link: '/components/rate' },
          { text: 'Upload 上传', link: '/components/upload' },
        ],
      },
      {
        text: '布局组件',
        items: [
          { text: 'Card 卡片', link: '/components/card' },
          { text: 'Row 行', link: '/components/row' },
          { text: 'Col 列', link: '/components/col' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'CollapseItem 折叠项', link: '/components/collapse-item' },
          { text: 'Accordion 手风琴', link: '/components/accordion' },
          { text: 'AccordionItem 手风琴项', link: '/components/accordion-item' },
          { text: 'ScrollArea 滚动区域', link: '/components/scroll-area' },
        ],
      },
      {
        text: '数据展示',
        items: [
          { text: 'Tag 标签', link: '/components/tag' },
          { text: 'Badge 徽标', link: '/components/badge' },
          { text: 'Progress 进度条', link: '/components/progress' },
          { text: 'Avatar 头像', link: '/components/avatar' },
          { text: 'Empty 空状态', link: '/components/empty' },
          { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
          { text: 'Timeline 时间轴', link: '/components/timeline' },
          { text: 'TimelineItem 时间轴项', link: '/components/timeline-item' },
          { text: 'Descriptions 描述列表', link: '/components/descriptions' },
          { text: 'DescriptionsItem 描述项', link: '/components/descriptions-item' },
          { text: 'Tree 树形控件', link: '/components/tree' },
          { text: 'Table 表格', link: '/components/table' },
          { text: 'Carousel 走马灯', link: '/components/carousel' },
          { text: 'Statistic 统计数值', link: '/components/statistic' },
        ],
      },
      {
        text: '反馈组件',
        items: [
          { text: 'Alert 警告提示', link: '/components/alert' },
          { text: 'Dialog 对话框', link: '/components/dialog' },
          { text: 'Loading 加载', link: '/components/loading' },
          { text: 'Toast 轻提示', link: '/components/toast' },
          { text: 'Result 结果页', link: '/components/result' },
        ],
      },
      {
        text: '浮层组件',
        items: [
          { text: 'Tooltip 文字提示', link: '/components/tooltip' },
          { text: 'Popover 气泡卡片', link: '/components/popover' },
          { text: 'Drawer 抽屉', link: '/components/drawer' },
        ],
      },
      {
        text: '导航组件',
        items: [
          { text: 'Tabs 标签页', link: '/components/tabs' },
          { text: 'TabPane 标签页项', link: '/components/tab-pane' },
          { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
          { text: 'BreadcrumbItem 面包屑项', link: '/components/breadcrumb-item' },
          { text: 'Pagination 分页', link: '/components/pagination' },
          { text: 'Steps 步骤条', link: '/components/steps' },
          { text: 'Step 步骤项', link: '/components/step' },
          { text: 'Menu 菜单', link: '/components/menu' },
          { text: 'MenuItem 菜单项', link: '/components/menu-item' },
          { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
        ],
      },
      {
        text: '其他',
        items: [
          { text: 'Calendar 日历', link: '/components/calendar' },
          { text: 'Command 命令面板', link: '/components/command' },
          { text: 'Backtop 回到顶部', link: '/components/backtop' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/i-shl/neo-brutal-vue' },
    ],
    footer: {
      message: 'MIT License',
      copyright: 'Copyright © 2025 NeoBrutal Vue',
    },
  },
})
