const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
  mode: 'production',
  entry: {
    sogou: './src/sogou.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].prod.bundle.js',
  },
  module: {
    rules: [],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'sogou.html',
      template: './public/sogou.html',
      templateParameters: {
        buildVersionDesc: '构建版本：生产环境版本(webpack.prod.config.js)',
      },
    }),
  ],
};

// 端对端测试时，需要特殊处理以便能够获知代码覆盖率
if (process.env.ENABLE_E2E_TEST === '1') {
  webpackConfig.devtool = 'sourcemap';
  webpackConfig.module.rules.push({
    test: /\.js$/,
    use: {
      loader: 'istanbul-instrumenter-loader',
      options: { esModules: true },
    },
    enforce: 'post',
    exclude: /node_modules|.\spec\.js$/,
  });
}

module.exports = webpackConfig;
