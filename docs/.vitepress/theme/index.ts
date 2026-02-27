import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'

// Import neo-brutal-vue styles (variables + component styles from source)
import '../../../src/styles/variables.css'
import './demo-overrides.css'
import './home.css'

export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
