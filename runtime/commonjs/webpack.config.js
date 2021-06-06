const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    clean: true,
  },
  devtool: false,
  mode: 'development',
};
