const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devtool: false,
  mode: 'development',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
