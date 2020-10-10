module.exports = {
  // 构建生成的文件路径，相对于根目录而言
  dest: './docs-dist',

  // 设置站点根路径，否则静态资源路径会有问题
  base: '/test-automation-training/',

  // 添加 github 链接，用于 gh-pages -d dist 命令
  repo: 'https://github.com/matmanjs/test-automation-training',

  title: 'Test Automation Training',
  description: 'web 自动化测试指导手册',
  head: [['link', { rel: 'icon', href: `/logo.png` }]],

  themeConfig: {
    locales: {
      '/': {
        navs: [
          { text: '自动化测试理论', link: '/about/' },
          { text: '单元测试-Mocha', link: '/unit-testing-with-mocha/' },
          { text: 'Issues', link: 'https://github.com/matmanjs/test-automation-training/issues' },
        ],
        sidebar: {
          '/about/': [
            {
              title: '关于 Test Automation Training',
              path: '/about/',
              collapsable: false,
            },
            {
              title: '自动化测试基础',
              collapsable: false,
              children: [
                'concept/test',
              ],
            }
          ],
          '/unit-testing-with-mocha/': [
            {
              title: '单元测试-Mocha',
              path: '/unit-testing-with-mocha/',
            },
            {
              title: 'Mocha 入门教程',
              path: '/unit-testing-with-mocha/mocha',
            },
            {
              title: '为项目接入单元测试',
              path: '/unit-testing-with-mocha/unit-test',
            },
            {
              title: '代码覆盖率',
              path: '/unit-testing-with-mocha/nyc',
            },
          ],
        },
      },
    },
  },
};
