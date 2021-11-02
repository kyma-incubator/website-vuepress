const { path } = require('@vuepress/utils');
const results = require('../../helperMD');

const sidebarPlugin = {
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.js'),
  define: {
    results,
  },
};
module.exports = sidebarPlugin;
