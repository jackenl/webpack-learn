# 深入理解 Webpack 运行时

使用 webpack 打包过后生成的 bundle 文件，bundle 整体上由一个 IIFE 包裹，整个 bundle 文件包含了入口文件以及与入口文件构成依赖条件的所有模块内容，执行 bundle 文件可以发现代码可以正常解析依赖模块内容并执行。之所以 webpack 能够

接下来我们来一起探究 webpack 是如何实现对各种依赖模块进行打包的。

## CommonJS runtime

```js
(() => {
  ...
  var __webpack_modules__ = {
    './src/a.js':
      (module, __unused_webpack_exports, __webpack_require__) => {
        const print2 = __webpack_require__(/*! ./b */ './src/b.js');
        print2();

        function print1() {
          console.log('Hello world!');
        }

        module.exports = print1;
      },
	...
  };
  ...
})
```

首先通过`__webpack_modules__`对象集合保存基于相对路径映射到对应模块的解析函数，这些模块解析函数都属于箭头函数，目的是通过箭头函数的函数作用域实现对模块变量声明的隔离。正常情况下解析函数都包含3个参数`(module, __unused_webpack_exports, __webpack_require__)`，其中三个参数分别代表：

* `module`是上一个模块执行`__webpack_require__`函数创建的`module`对象，通过给`module.export`赋值需要导出的内容，然后模块执行`__webpack_require__`函数返回`module.export`，从而获取导入的模块内容。
* `__unused_webpack_exports`实际是对`module`对象`exports`属性的引用。
* `__webpack_require__`就是打包文件中定义的`__webpack_require__`函数。

### \__webpack_require__ 函数

`__webpack_require__`函数定义如下：

```js
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {
    // Check if module is in cache
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    // Create a new module (and put it into the cache)
    var module = (__webpack_module_cache__[moduleId] = {
      // no module.id needed
      // no module.loaded needed
      exports: {}
    });

    // Execute the module function
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    // Return the exports of the module
    return module.exports;
  }
```

`__webpack_require__`函数通俗来讲也就是我们编写js代码时输入的`require`模块导入函数，webpack在打包文件过程中会从入口文件开始递归遍历所有依赖文件，检索所有依赖文件是否含有`require`函数，如果有则将`require`标识符其替换成`__webpack_require__`，并将整个依赖文件代码串装入前面所说的模块解析函数以依赖文件的相对路径为映射属性保存到`__webpack_modules__`对象中。

外部模块调用传入对应依赖文件的相对路径字符串作为`moduleId`参数的``__webpack_require__`函数，函数内部首先从`__webpack_module_cache__`缓存对象根据`moduleId`查询是否有已经解析成功的模块内容，如果有则直接返回，如果没有则创建一个`module`对象保存到`__webpack_module_cache__`对象中，然后从`__webpack_modules__`获取到对应模块的解析函数执行将导出内容赋值给`module.exports`返回，从而获取到导入的依赖模块。

## ESModule runtime



