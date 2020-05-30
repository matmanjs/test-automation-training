# Deal Absolute Paths

有时候源文件中require了绝对路径的文件，用 webpack 等构建工具可以很容易处理。比如在 webpack 中可以定义 `src/common` 为一个模块，在其他文件中直接使用 `require('common')` 即可。

但是对于 mocha 而言，它是无法有效识别的，必须特殊处理并指定根目录。
