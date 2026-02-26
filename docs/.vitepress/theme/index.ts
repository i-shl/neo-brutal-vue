import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// Import neo-brutal-vue styles (variables + component styles from source)
import '../../../src/styles/variables.css'
import './demo-overrides.css'

export default {
  extends: DefaultTheme,
} satisfies Theme
