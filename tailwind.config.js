module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './docs/.vuepress/**/*.js',
      './docs/.vuepress/**/*.vue',
      './docs/.vuepress/**/*.ts',
    ],
    options: {
      safelist: ['html', 'body'],
    },
  },
};
