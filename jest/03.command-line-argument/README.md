# 03.command-line-argument

Jest 支持命令行启动测试。

> 一般情况下，我们还是推荐使用文件的方式来配置参数，这样会更容易维护一下。不过命令行参数的优先级会更高，也有一定的适用场景。

你可以通过 `--help` 命令来查看，例如执行：

```bash
$ npx jest --help
```

得到帮助信息：

```
➜  03.command-line-argument git:(master) ✗ npx jest --help
Usage: jest [--config=<pathToConfigFile>] [TestPathPattern]

选项：
  --help, -h                    显示帮助信息                              [布尔]
  --version, -v                 Print the version and exit                [布尔]
  --all                         The opposite of `onlyChanged`. If `onlyChanged`
                                is set by default, running jest with `--all`
                                will force Jest to run all tests instead of
                                running only tests related to changed files.
                                                                          [布尔]
  --automock                    Automock all files by default.            [布尔]
  --bail, -b                    Exit the test suite immediately after `n` number
                                of failing tests.                         [布尔]
  --browser                     Respect the "browser" field in package.json when
                                resolving modules. Some packages export
                                different versions based on whether they are
                                operating in node.js or a browser.        [布尔]
  --cache                       Whether to use the transform cache. Disable the
                                cache using --no-cache.                   [布尔]
  --cacheDirectory              The directory where Jest should store its cached
                                dependency information.                 [字符串]
  --changedFilesWithAncestor    Runs tests related to the current changes and
                                the changes made in the last commit. Behaves
                                similarly to `--onlyChanged`.             [布尔]
  --changedSince                Runs tests related to the changes since the
                                provided branch. If the current branch has
                                diverged from the given branch, then only
                                changes made locally will be tested. Behaves
                                similarly to `--onlyChanged`.           [字符串]
  --ci                          Whether to run Jest in continuous integration
                                (CI) mode. This option is on by default in most
                                popular CI environments. It will prevent
                                snapshots from being written unless explicitly
                                requested.                [布尔] [默认值: false]
  --clearCache                  Clears the configured Jest cache directory and
                                then exits. Default directory can be found by
                                calling jest --showConfig                 [布尔]
  --clearMocks                  Automatically clear mock calls and instances
                                between every test. Equivalent to calling
                                jest.clearAllMocks() between each test.   [布尔]
  --collectCoverage             Alias for --coverage.                     [布尔]
  --collectCoverageFrom         A glob pattern relative to <rootDir> matching
                                the files that coverage info needs to be
                                collected from.                         [字符串]
  --collectCoverageOnlyFrom     Explicit list of paths coverage will be
                                restricted to.                            [数组]
  --color                       Forces test results output color highlighting
                                (even if stdout is not a TTY). Set to false if
                                you would like to have no colors.         [布尔]
  --colors                      Alias for `--color`.                      [布尔]
  --config, -c                  The path to a jest config file specifying how to
                                find and execute tests. If no rootDir is set in
                                the config, the directory containing the config
                                file is assumed to be the rootDir for the
                                project.This can also be a JSON encoded value
                                which Jest will use as configuration.   [字符串]
  --coverage                    Indicates that test coverage information should
                                be collected and reported in the output.  [布尔]
  --coverageDirectory           The directory where Jest should output its
                                coverage files.                         [字符串]
  --coveragePathIgnorePatterns  An array of regexp pattern strings that are
                                matched against all file paths before executing
                                the test. If the file pathmatches any of the
                                patterns, coverage information will be skipped.
                                                                          [数组]
  --coverageProvider            Select between Babel and V8 to collect coverage
                                                         [可选值: "babel", "v8"]
  --coverageReporters           A list of reporter names that Jest uses when
                                writing coverage reports. Any istanbul reporter
                                can be used.                              [数组]
  --coverageThreshold           A JSON string with which will be used to
                                configure minimum threshold enforcement for
                                coverage results                        [字符串]
  --debug                       Print debugging info about your jest config.
                                                                          [布尔]
  --detectLeaks                 **EXPERIMENTAL**: Detect memory leaks in tests.
                                After executing a test, it will try to garbage
                                collect the global object used, and fail if it
                                was leaked                [布尔] [默认值: false]
  --detectOpenHandles           Print out remaining open handles preventing Jest
                                from exiting at the end of a test run. Implies
                                `runInBand`.              [布尔] [默认值: false]
  --env                         The test environment used for all tests. This
                                can point to any file or node module. Examples:
                                `jsdom`, `node` or `path/to/my-environment.js`
                                                                        [字符串]
  --errorOnDeprecated           Make calling deprecated APIs throw helpful error
                                messages.                 [布尔] [默认值: false]
  --expand, -e                  Use this flag to show full diffs instead of a
                                patch.                                    [布尔]
  --filter                      Path to a module exporting a filtering function.
                                This method receives a list of tests which can
                                be manipulated to exclude tests from running.
                                Especially useful when used in conjunction with
                                a testing infrastructure to filter known broken
                                tests.                                  [字符串]
  --findRelatedTests            Find related tests for a list of source files
                                that were passed in as arguments. Useful for
                                pre-commit hook integration to run the minimal
                                amount of tests necessary.                [布尔]
  --forceExit                   Force Jest to exit after all tests have
                                completed running. This is useful when resources
                                set up by test code cannot be adequately cleaned
                                up.                                       [布尔]
  --globalSetup                 The path to a module that runs before All Tests.
                                                                        [字符串]
  --globalTeardown              The path to a module that runs after All Tests.
                                                                        [字符串]
  --globals                     A JSON string with map of global variables that
                                need to be available in all test environments.
                                                                        [字符串]
  --haste                       A JSON string with map of variables for the
                                haste module system                     [字符串]
  --init                        Generate a basic configuration file       [布尔]
  --json                        Prints the test results in JSON. This mode will
                                send all other test output and user messages to
                                stderr.                                   [布尔]
  --lastCommit                  Run all tests affected by file changes in the
                                last commit made. Behaves similarly to
                                `--onlyChanged`.                          [布尔]
  --listTests                   Lists all tests Jest will run given the
                                arguments and exits. Most useful in a CI system
                                together with `--findRelatedTests` to determine
                                the tests Jest will run based on specific files
                                                          [布尔] [默认值: false]
  --logHeapUsage                Logs the heap usage after every test. Useful to
                                debug memory leaks. Use together with
                                `--runInBand` and `--expose-gc` in node.  [布尔]
  --mapCoverage                 Maps code coverage reports against original
                                source code when transformers supply source
                                maps.

                                DEPRECATED                                [布尔]
  --maxConcurrency              Specifies the maximum number of tests that are
                                allowed to runconcurrently. This only affects
                                tests using `test.concurrent`.[数字] [默认值: 5]
  --maxWorkers, -w              Specifies the maximum number of workers the
                                worker-pool will spawn for running tests. This
                                defaults to the number of the cores available on
                                your machine. (its usually best not to override
                                this default)                           [字符串]
  --moduleDirectories           An array of directory names to be searched
                                recursively up from the requiring module's
                                location.                                 [数组]
  --moduleFileExtensions        An array of file extensions your modules use.
                                If you require modules without specifying a
                                file extension, these are the extensions Jest
                                will look for.                            [数组]
  --moduleNameMapper            A JSON string with a map from regular
                                expressions to module names or to arrays of
                                module names that allow to stub out resources,
                                like images or styles with a single module
                                                                        [字符串]
  --modulePathIgnorePatterns    An array of regexp pattern strings that are
                                matched against all module paths before those
                                paths are to be considered "visible" to the
                                module loader.                            [数组]
  --modulePaths                 An alternative API to setting the NODE_PATH env
                                variable, modulePaths is an array of absolute
                                paths to additional locations to search when
                                resolving modules.                        [数组]
  --noStackTrace                Disables stack trace in test results output
                                                                          [布尔]
  --notify                      Activates notifications for test results. [布尔]
  --notifyMode                  Specifies when notifications will appear for
                                test results.[字符串] [默认值: "failure-change"]
  --onlyChanged, -o             Attempts to identify which tests to run based on
                                which files have changed in the current
                                repository. Only works if you're running tests
                                in a git or hg repository at the moment.  [布尔]
  --onlyFailures, -f            Run tests that failed in the previous execution.
                                                                          [布尔]
  --outputFile                  Write test results to a file when the --json
                                option is also specified.               [字符串]
  --passWithNoTests             Will not fail if no tests are found (for example
                                while using `--testPathPattern`.)
                                                          [布尔] [默认值: false]
  --preset                      A preset that is used as a base for Jest's
                                configuration.                          [字符串]
  --prettierPath                The path to the "prettier" module used for
                                inline snapshots.                       [字符串]
  --projects                    A list of projects that use Jest to run all
                                tests of all projects in a single instance of
                                Jest.                                     [数组]
  --reporters                   A list of custom reporters for the test suite.
                                                                          [数组]
  --resetMocks                  Automatically reset mock state between every
                                test. Equivalent to calling jest.resetAllMocks()
                                between each test.                        [布尔]
  --resetModules                If enabled, the module registry for every test
                                file will be reset before running each
                                individual test.                          [布尔]
  --resolver                    A JSON string which allows the use of a custom
                                resolver.                               [字符串]
  --restoreMocks                Automatically restore mock state and
                                implementation between every test. Equivalent to
                                calling jest.restoreAllMocks() between each
                                test.                                     [布尔]
  --rootDir                     The root directory that Jest should scan for
                                tests and modules within.               [字符串]
  --roots                       A list of paths to directories that Jest should
                                use to search for files in.               [数组]
  --runInBand, -i               Run all tests serially in the current process
                                (rather than creating a worker pool of child
                                processes that run tests). This is sometimes
                                useful for debugging, but such use cases are
                                pretty rare.                              [布尔]
  --runTestsByPath              Used when provided patterns are exact file
                                paths. This avoids converting them into a
                                regular expression and matching it against every
                                single file.              [布尔] [默认值: false]
  --runner                      Allows to use a custom runner instead of Jest's
                                default test runner.                    [字符串]
  --selectProjects              Run only the tests of the specified
                                projects.Jest uses the attribute `displayName`
                                in the configuration to identify each project.
                                                                          [数组]
  --setupFiles                  A list of paths to modules that run some code
                                to configure or set up the testing environment
                                before each test.                         [数组]
  --setupFilesAfterEnv          A list of paths to modules that run some code
                                to configure or set up the testing framework
                                before each test                          [数组]
  --showConfig                  Print your jest config and then exits.    [布尔]
  --silent                      Prevent tests from printing messages through the
                                console.                                  [布尔]
  --skipFilter                  Disables the filter provided by --filter. Useful
                                for CI jobs, or local enforcement when fixing
                                tests.                                    [布尔]
  --snapshotSerializers         A list of paths to snapshot serializer modules
                                Jest should use for snapshot testing.     [数组]
  --testEnvironment             Alias for --env                         [字符串]
  --testEnvironmentOptions      Test environment options that will be passed to
                                the testEnvironment. The relevant options depend
                                on the environment.                     [字符串]
  --testFailureExitCode         Exit code of `jest` command if the test run
                                failed                                  [字符串]
  --testLocationInResults       Add `location` information to the test results
                                                          [布尔] [默认值: false]
  --testMatch                   The glob patterns Jest uses to detect test
                                files.                                    [数组]
  --testNamePattern, -t         Run only tests with a name that matches the
                                regex pattern.                          [字符串]
  --testPathIgnorePatterns      An array of regexp pattern strings that are
                                matched against all test paths before executing
                                the test. If the test path matches any of the
                                patterns, it will be skipped.             [数组]
  --testPathPattern             A regexp pattern string that is matched against
                                all tests paths before executing the test.[数组]
  --testRegex                   A string or array of string regexp patterns that
                                Jest uses to detect test files.           [数组]
  --testResultsProcessor        Allows the use of a custom results processor.
                                This processor must be a node module that
                                exports a function expecting as the first
                                argument the result object.             [字符串]
  --testRunner                  Allows to specify a custom test runner. The
                                default is  `jasmine2`. A path to a custom test
                                runner can be provided:
                                `<rootDir>/path/to/testRunner.js`.      [字符串]
  --testSequencer               Allows to specify a custom test sequencer. The
                                default is `@jest/test-sequencer`. A path to a
                                custom test sequencer can be provided:
                                `<rootDir>/path/to/testSequencer.js`    [字符串]
  --testTimeout                 This option sets the default timeouts of test
                                cases.                                    [数字]
  --testURL                     This option sets the URL for the jsdom
                                environment.                            [字符串]
  --timers                      Setting this value to fake allows the use of
                                fake timers for functions such as setTimeout.
                                                                        [字符串]
  --transform                   A JSON string which maps from regular
                                expressions to paths to transformers.   [字符串]
  --transformIgnorePatterns     An array of regexp pattern strings that are
                                matched against all source file paths before
                                transformation.                           [数组]
  --unmockedModulePathPatterns  An array of regexp pattern strings that are
                                matched against all modules before the module
                                loader will automatically return a mock for
                                them.                                     [数组]
  --updateSnapshot, -u          Use this flag to re-record snapshots. Can be
                                used together with a test suite pattern or with
                                `--testNamePattern` to re-record snapshot for
                                test matching the pattern                 [布尔]
  --useStderr                   Divert all output to stderr.              [布尔]
  --verbose                     Display individual test results with the test
                                suite hierarchy.                          [布尔]
  --watch                       Watch files for changes and rerun tests related
                                to changed files. If you want to re-run all
                                tests when a file has changed, use the
                                `--watchAll` option.                      [布尔]
  --watchAll                    Watch files for changes and rerun all tests. If
                                you want to re-run only the tests related to the
                                changed files, use the `--watch` option.  [布尔]
  --watchPathIgnorePatterns     An array of regexp pattern strings that are
                                matched against all paths before trigger test
                                re-run in watch mode. If the test path matches
                                any of the patterns, it will be skipped.  [数组]
  --watchman                    Whether to use watchman for file crawling.
                                Disable using --no-watchman.              [布尔]

Documentation: https://jestjs.io/
```

## 1. 安装

```bash
$ npm install
```

## 2. 示例说明

在示例中，我们选择了 [jest-html-reporters](https://www.npmjs.com/package/jest-html-reporters) 来做报告模板输出，并制定了要手机覆盖率信息：

```bash
$ npx jest --reporters=default --reporters=jest-html-reporters --collectCoverage
```

运行之后结果：

```
➜  03.command-line-argument git:(master) ✗ npx jest --reporters="jest-html-reporters" --reporters=default --collectCoverage
 PASS  __tests__/dir/multiply.test.js
 PASS  __tests__/sum.test.js
 PASS  __tests__/sum-test.js
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |      100 |     100 |     100 |
 src          |     100 |      100 |     100 |     100 |
  sum.js      |     100 |      100 |     100 |     100 |
 src/dir      |     100 |      100 |     100 |     100 |
  multiply.js |     100 |      100 |     100 |     100 |
--------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.503 s
Ran all test suites.
📦 reporter is created on: /Users/helinjiang/vscodeproject/test-automation-training/jest/03.command-line-argument/jest_html_reporters.html
```

我们也可以增加 `script` 命令（推荐做法）：

```json
{
  "scripts": {
    "test": "jest --reporters=default --reporters=jest-html-reporters --collectCoverage"
  }
}
```

这样，我们可以简化测试命令为：

```bash
$ npm test
```
