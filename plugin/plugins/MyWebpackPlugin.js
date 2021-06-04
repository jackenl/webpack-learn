const { ConcatSource } = require("webpack-sources");

class MyWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('MyWebpackPlugin', (compilation) => {
      compilation.hooks.optimizeChunkAssets.tap('MyWebpackPlugin', (chunks) => {
        for (const chunk of chunks) {
          for (const file of chunk.files) {
            compilation.updateAsset(file, (old) => {
              // use strict mode
              return new ConcatSource('"use strict"', '\n', old);
            });
          }
        }
      });
    });
  }
}

module.exports = MyWebpackPlugin;
