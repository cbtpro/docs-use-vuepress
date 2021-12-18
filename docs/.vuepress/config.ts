import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: `A simple VuePress project deployed with docs-use-vuepress.`,

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})