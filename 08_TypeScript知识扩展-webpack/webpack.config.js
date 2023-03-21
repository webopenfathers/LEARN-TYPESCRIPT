// webpack基本配置
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 环境模式
  mode: 'development',
  // 入口文件
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.cjs', '.json'],
  },
  devServer: {
    // host:'',
    // port:''
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
  ],
};
