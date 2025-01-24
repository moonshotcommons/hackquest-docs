import nextra from 'nextra'

const withNextra = nextra({
  // ... Other Nextra config options
  // theme: 'nextra-theme-docs',
  // themeConfig: './theme.config.js',
  // defaultShowCopyCode: true,
  // experimental: {
  //   contentMode: true, // 启用 content 模式
  // },
  codeHighlight: true,
  defaultShowCopyCode: true,
})

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
})
