const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: {
    index: resolve('src/index.js'),
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    clean: true,
  },
  devtool: false,
  mode: 'development',
}