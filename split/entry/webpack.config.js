const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: {
    index: {
      import: resolve('src/index.js'),
      dependOn: 'lodash',
    },
    other: {
      import: resolve('src/other-module.js'),
      dependOn: 'lodash',
    },
    lodash: 'lodash',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    clean: true,
  },
  devtool: false,
  mode: 'development',
  optimization: {
    runtimeChunk: 'single',
  },
}