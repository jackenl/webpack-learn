const path = require('path');
const MyWebpackPlugin = require('./plugins/MyWebpackPlugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: '[name].js',
  },
  mode: 'production',
  plugins: [
    new MyWebpackPlugin(),
  ],
};
