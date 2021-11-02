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
  onPrepared: async app => {
    const myData = app.pages.map(page => {
      page;
    });
    await app.writeTemp(
      'my-data.js',
      `export default ${JSON.stringify(myData)}`
    );
  },
};
