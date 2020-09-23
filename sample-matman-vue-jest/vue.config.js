const path = require('path');
const enableE2ETest = process.env.ENABLE_E2E_TEST;

module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  chainWebpack: (config) => {
    if (enableE2ETest) {
      console.log('enableE2ETest is true');

      config.devtool = '#inline-cheap-module-source-map';

      config.module
        .rule('istanbul')
        .test(/\.(js|vue)$/)
        .enforce('post')
        .include.add(path.resolve(__dirname, '/src'))
        .end()
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .options({ esModules: true });
    }
  },
};
