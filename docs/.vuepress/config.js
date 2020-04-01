
module.exports = {
  title: 'Helpful JavaScript Snippets',
  description: 'Helpful JavaScript Snippets',
  locales: {
    '/en/guide/': {
      lang: 'English',
      title: 'Helpful JavaScript Snippets',
      description: 'Helpful JavaScript Snippets',
    },
    '/cn/guide/': {
      lang: '中文',
      title: 'JavaScript工具函数',
      description: 'JavaScript工具函数',
    },
  },
  themeConfig: {
    docsDir: 'docs',
    locales: {
      '/en/guide/': {
        label: 'English',
        selectText: 'English',
        sidebar: {
          '/en/guide/': guideSidebar('en'),
        },
        nav: [
          { text: 'Document', link: '/en/guide/' },
          { text: 'Project', link: 'https://github.com/czero1995/util-snippets' },
        ],
      },
      '/cn/guide/': {
        label: '中文',
        selectText: '中文',
        sidebar: {
          '/cn/guide/': guideSidebar('cn'),
        },
        nav: [
          { text: '文档', link: '/cn/guide/' },
          { text: '项目', link: 'https://github.com/czero1995/util-snippets' },
        ],
      },
    },
  },
};

function guideSidebar(lang) {
  return [
    {
      title: lang == 'en' ? 'Project Brief' : '项目简介',
      collapsable: true,
      children: [''],
    },
    {
      title: lang == 'en' ? 'Is Judge' : '判断类型',
      collapsable: true,
      children: ['is/isAndroid', 'is/isIos', 'is/isNill', 'is/isBrowser', 'is/isBottomVisible', 'is/isValidJSON', 'is/isMobilePhone', 'is/isBrowserTabFocused'],
    },
    {
      title: lang == 'en' ? 'Util Function' : '工具函数',
      collapsable: true,
      children: ['util/scrollToTop', 'util/redirect', 'util/sleep', 'util/currentURL', 'util/capitalizeEveryWord', 'util/randomHexColorCode', 'util/smoothScroll', 'util/deepClone', 'util/throttle', 'util/debounce'],
    },
    {
      title: lang == 'en' ? 'Array' : '数组',
      collapsable: true,
      children: ['array/countOccurrences', 'array/difference', 'array/maxN', 'array/minN', 'array/intersection', 'array/castArray'],
    },
    {
      title: lang == 'en' ? 'Operation' : '运算',
      collapsable: true,
      children: ['operation/sum', 'operation/average', 'operation/randomIntArrayInRange', 'operation/numberOperation',],
    },
    {
      title: lang == 'en' ? 'Design Mode' : '设计模式',
      collapsable: true,
      children: ['design/strategies', 'design/decorator'],
    },
  ];
}