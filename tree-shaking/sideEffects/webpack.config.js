const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    clean: true,
  },
  devtool: false,
  mode: 'development',
  optimization: {
    minimize: true, // 开启 terser 代码压缩
    usedExports: true, // 开启 tree-shaking
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        sideEffects: false, // 标记无副作用
      },
    ],
  },
};
