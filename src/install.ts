// NeoBrutal Vue - Vue Plugin
// 全量注册时仅注册常用组件；其余组件请按需 import { NeoX } from 'neo-brutal-vue'
import type { App, Component } from 'vue'
import NeoButton from './components/base/Button.vue'
import NeoInput from './components/form/Input.vue'
import NeoCard from './components/layout/Card.vue'
import NeoTag from './components/data-display/Tag.vue'
import NeoAlert from './components/feedback/Alert.vue'
import NeoCheckbox from './components/form/Checkbox.vue'
import NeoBadge from './components/data-display/Badge.vue'
import NeoDialog from './components/feedback/Dialog.vue'
import './styles/variables.css'

const components: Record<string, Component> = {
  NeoButton,
  NeoInput,
  NeoCard,
  NeoTag,
  NeoAlert,
  NeoCheckbox,
  NeoBadge,
  NeoDialog,
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

// 单独导出组件，方便按需引入
export {
  NeoButton,
  NeoInput,
  NeoCard,
  NeoTag,
  NeoAlert,
  NeoCheckbox,
  NeoBadge,
  NeoDialog,
  install
}

// 版本信息
export const version = '1.0.0'
