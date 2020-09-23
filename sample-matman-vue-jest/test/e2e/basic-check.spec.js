import checkPage from '../../DevOps/matman-app/case_modules/users/basic-check.js';

describe('测试demo页面', () => {
  jest.setTimeout(30000);

  let resultData;

  beforeAll(async function() {
    resultData = await checkPage({
      show: false,
      useRecorder: true,
      doNotCloseBrowser: false,
      queryDataMap: {
        users: 'success',
      },
    });
  });

  describe('第一步：开始操作之前，等待页面加载完成', function() {
    let data;

    beforeAll(function() {
      data = resultData.get('init');
    });

    test('检查数据快照', () => {
      expect(data).toEqual({
        vueInfo: {
          title: 'Welcome to Your Vue.js App',
          desc:
            'For a guide and recipes on how to configure / customize this project, check out the  vue-cli documentation .',
        },
        searchGithub: {
          title: '搜索 github 用户',
          searchBtn01Text: '搜索 yyx990803',
          searchBtn02Text: '搜索 matmanjs',
          tips: 1,
          searchList: [],
        },
      });
    });
  });

  describe('第二步：点击 ”搜索 yyx990803“ 按钮', function() {
    let data;

    beforeAll(function() {
      data = resultData.get('click_search_btn_01');
    });

    test('检查数据快照', () => {
      expect(data).toEqual({
        vueInfo: {
          title: 'Welcome to Your Vue.js App',
          desc:
            'For a guide and recipes on how to configure / customize this project, check out the  vue-cli documentation .',
        },
        searchGithub: {
          title: '搜索 github 用户',
          searchBtn01Text: '搜索 yyx990803',
          searchBtn02Text: '搜索 matmanjs',
          tips: 0,
          searchList: [
            {
              imgUrl: 'https://avatars1.githubusercontent.com/u/499550?v=4',
              userName: 'yyx990803',
              htmlUrl: 'https://github.com/yyx990803',
            },
            {
              imgUrl: 'https://avatars1.githubusercontent.com/u/4066435?v=4',
              userName: 'bekliev',
              htmlUrl: 'https://github.com/bekliev',
            },
          ],
        },
      });
    });
  });

  describe('第三步：点击 ”搜索 matmanjs“ 按钮', function() {
    let data;

    beforeAll(function() {
      data = resultData.get('click_search_btn_02');
    });

    test('检查数据快照', () => {
      expect(data).toEqual({
        vueInfo: {
          title: 'Welcome to Your Vue.js App',
          desc:
            'For a guide and recipes on how to configure / customize this project, check out the  vue-cli documentation .',
        },
        searchGithub: {
          title: '搜索 github 用户',
          searchBtn01Text: '搜索 yyx990803',
          searchBtn02Text: '搜索 matmanjs',
          tips: 0,
          searchList: [
            {
              imgUrl: 'https://avatars3.githubusercontent.com/u/39577466?v=4',
              userName: 'matmanjs',
              htmlUrl: 'https://github.com/matmanjs',
            },
          ],
        },
      });
    });
  });
});
