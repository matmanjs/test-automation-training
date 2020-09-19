# 02.jest-test-directory

默认情况下， 执行 `jest` 命令时，Jest 会按照如下两个规则来寻找测试用例脚本：

- `**/__tests__/**/*.[jt]s?(x)`，即 `__tests__` 文件夹下所有 `.ts`、 `.tsx`、`.js` 和 `.jsx` 文件
- `**/?(*.)+(spec|test).[jt]s?(x)`，例如 `xxx.spec.js`、`xxx.spec.ts`、`xxx.test.js`、`xxx.test.ts` 等

当然，你也可以配置 `testPathIgnorePatterns` 来过滤，默认情况下 `/node_modules/` 是被忽略的。

```
├── __tests__
│   └── component.spec.js # test
│   └── anything # test
├── package.json # not test
├── foo.test.js # test
├── bar.spec.jsx # test
└── component.js # not test
```

- [testMatch [array<string>]](https://jestjs.io/docs/en/configuration#testmatch-arraystring)
- [testPathIgnorePatterns [array<string>]](https://jestjs.io/docs/en/configuration#testpathignorepatterns-arraystring)
- [testRegex [string | array<string>]](https://jestjs.io/docs/en/configuration#testregex-string--arraystring)

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

### 2.1 匹配测试文件的规则

在本例中，当执行下述命令时，`__test__` 目录下的所有文件都会被执行，包括 `__test__/sum-test.js` 文件。而 `test` 目录下，除了 `test/sum-test.js` 之外，所有测试文件也都被执行了。

```bash
$ npx jest
```

运行结果如下：

```
➜  02.jest-test-directory git:(master) ✗ npx jest
 PASS  test/dir/multiply.test.js
 PASS  __tests__/sum-test.js
 PASS  test/sum.test.js
 PASS  __tests__/dir/multiply.test.js
 PASS  __tests__/sum.test.js

Test Suites: 5 passed, 5 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.635 s
Ran all test suites.
```

由此可见，对于如何如何组织测试文件，总结为：

- 若测试文件在 `__test__` 目录下，则无需在意测试文件名是否为 `xxx.test.js` 还是 `xxx.spec.ts` 等格式的限制
- 若测试文件不在 `__test__` 目录下，则一定要满足 `xxx.test.js` 还是 `xxx.spec.ts` 等格式的限制，也可以通过配置 [testMatch]](https://jestjs.io/docs/en/configuration#testmatch-arraystring) 改变这个限制

### 2.2 指定特定文件目录的测试文件

另外，我们也可以在执行时指定文件目录，例如：

```bash
$ # 只执行 test 下的测试用例
$ npx jest test/
```

可以看到，被执行的测试文件就只剩下 `test/` 目录下的两个文件了。

> 特别注意，文件夹后面需要跟随 `/`，必须是 `jest test/` 而不能是 `jest test` 。

```
➜  02.jest-test-directory git:(master) ✗ npx jest test/
 PASS  test/dir/multiply.test.js
 PASS  test/sum.test.js

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.834 s, estimated 1 s
Ran all test suites matching /test\//i.
```
