const path = require('path');

module.exports = {
  lang: 'en-US',
  title: 'Hello, VuesssPress',
  description: 'This is my first VuePress site',
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    darkMode: false,
  },
  plugins: [[path.resolve(__dirname, './plugins/helloworld/')]],
  bundler: '@vuepress/bundler-vite',
  // bundler options
  bundlerConfig: {
    // see below
  },
};
