const { path } = require('@vuepress/utils');

module.exports = (options = {}, ctx) => {
  return {
    enhanceAppFiles: [path.resolve(__dirname, 'enhanceAppFile.js')],
  };
};
