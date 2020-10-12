const path = require('path');
const { E2ERunner } = require('matman-e2e-test');
const whistle = require('../DevOps/whistle');

/**
 * 创建 E2ERunner
 *
 * @return {Promise<E2ERunner>}
 */
async function createE2ERunner() {
  return new E2ERunner({
    workspacePath: path.join(__dirname, '../'),
    outputPath: path.join(__dirname, '../.matman_output')
  });
}

/**
 * 测试之前准备环境，在准备测试环境阶段准备SUT（System Under Test）
 *
 * @param {E2ERunner} e2eRunner
 * @param {Object} [config]
 * @param {Boolean} [config.isBuildDev] 当前构建是否是 dev 场景
 * @param {Number} [config.projectPort] 启动项目时需要的端口
 * @param {Number} [config.mockstarPort] MockStar 需要的端口
 * @param {Number} [config.whistlePort] Whistle 需要的端口
 * @param {Boolean} [config.useCurrentStartedWhistle] 是否复用当前可能启动的 whistle，适合开发场景下使用
 * @return {Promise<Object>}
 */
async function prepareSUT(e2eRunner, config = {}) {
  // 第一步：构建项目
  // 注意开发模式下是需要端口的，create-react-app 可以通过 PORT 来指定启动端口，默认是 3000
  let projectPort;
  if (config.isBuildDev) {
    projectPort = await e2eRunner.buildProject(
      port => `npx cross-env ENABLE_E2E_TEST=1 PORT=${port} npm start`,
      {
        cwd: e2eRunner.workspacePath,
        port: config.projectPort,
        usePort: true,
        checkIfBuildCompleted: stdoutData => stdoutData && stdoutData.indexOf('Compiled successfully') > -1,
      },
    );
  } else {
    await e2eRunner.buildProject('npx cross-env ENABLE_E2E_TEST=1 npm run build', {
      cwd: e2eRunner.workspacePath,
    });
  }

  // 第二步：启动 mockstar
  const mockstarAppPath = path.join(e2eRunner.workspacePath, './DevOps/mockstar-app');
  const mockstarPort = await e2eRunner.startMockstar(mockstarAppPath, {
    port: config.mockstarPort,
  });

  // 第三步：启动 whistle
  const whistlePort = await e2eRunner.startWhistle({
    port: config.whistlePort,
    useCurrentStartedWhistle: config.useCurrentStartedWhistle,
    getWhistleRules: () => {
      const getRulesOpts = {
        projectRootPath: e2eRunner.workspacePath,
        mockstarPort,
      };
      return config.isBuildDev
        ? whistle.getDevRules({ ...getRulesOpts, projectPort })
        : whistle.getProdRules(getRulesOpts);
    },
  });

  // 第四步：启动 matman
  const matmanAppPath = path.join(e2eRunner.workspacePath, './DevOps/matman-app');
  await e2eRunner.startMatman(matmanAppPath);

  return {
    config,
    projectPort,
    mockstarPort,
    whistlePort,
    matmanAppPath,
  };
}

/**
 * 直接执行测试文件，执行测试文件阶段，即使用 Mocha 或者 Jest 执行测试命令
 *
 * @param {E2ERunner} e2eRunner
 * @param {Object} [config]
 * @param {Number} [config.whistlePort] Whistle 需要的端口
 * @param {Number} [config.matmanAppPath] Matman 项目根目录
 * @return {Promise<Object>}
 */
async function runE2ETestDirect(e2eRunner, config = {}) {
  const { whistlePort, matmanAppPath } = config;

  // 启动 e2e test
  await e2eRunner.runE2ETest('tnpm run test:e2e:direct', {
    cwd: e2eRunner.workspacePath,
    whistlePort,
    matmanAppPath,
    mochawesomeJsonFilePath: path.join(e2eRunner.outputPath, './mochawesome/mochawesome.json'),
  });

  return {
    config,
  };
}

/**
 * 执行：初始化环境
 * @param {Object} [params]
 * @param {Number} [params.projectPort] 项目启动需要的端口
 * @param {Number} [params.whistlePort] Whistle 需要的端口
 * @param {Number} [params.mockstarPort] MockStar 需要的端口
 * @param {Boolean} [params.useCurrentStartedWhistle] 是否复用当前可能启动的 whistle，适合开发场景下使用
 * @param {Boolean} [params.isBuildDev] 当前构建是否是 dev 场景
 * @return {Promise<void>}
 */
async function bootstrap(params) {
  const { projectPort, mockstarPort, whistlePort, useCurrentStartedWhistle, isBuildDev } = params;

  // 创建 E2ERunner
  const e2eRunner = await createE2ERunner();

  // 设置启动
  await e2eRunner.start();

  // 测试之前准备环境
  const prepareSUTResult = await prepareSUT(e2eRunner, {
    projectPort,
    mockstarPort,
    whistlePort,
    useCurrentStartedWhistle,
    isBuildDev,
  });

  // debug 日志
  console.log(prepareSUTResult);
  console.log(e2eRunner);
}

/**
 * 执行：端对端测试
 * @param {Object} [params]
 * @param {Boolean} [params.isBuildDev] 当前构建是否是 dev 场景
 * @return {Promise<void>}
 */
async function run(params = {}) {
  const { isBuildDev } = params;

  // 创建 E2ERunner
  const e2eRunner = await createE2ERunner();

  // 设置启动
  await e2eRunner.start();

  // 测试之前准备环境
  const prepareSUTResult = await prepareSUT(e2eRunner, { isBuildDev });
  const { whistlePort, matmanAppPath } = prepareSUTResult;

  // 直接执行测试文件
  await runE2ETestDirect(e2eRunner, {
    whistlePort,
    matmanAppPath,
  });

  // 设置结束
  await e2eRunner.stop();
}

module.exports = {
  createE2ERunner,
  prepareSUT,
  runE2ETestDirect,
  bootstrap,
  run,
};
