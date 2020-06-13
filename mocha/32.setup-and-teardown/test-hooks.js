// https://mochajs.org/#available-root-hooks
exports.mochaHooks = {
  // 普通的异步写法
  beforeAll(done) {
    console.log('[test-hooks.js] beforeAll');
    done();
  },

  // async or Promise-returning functions allowed
  async beforeEach() {
    console.log('[test-hooks.js] beforeEach');
  },

  // https://mochajs.org/#multiple-root-hooks-in-a-single-plugin
  afterAll: [
    function (done) {
      console.log('[test-hooks.js] afterAll done()');
      done();
    },
    async function () {
      console.log('[test-hooks.js] afterAll async-await');
    },
  ],

  afterEach(done) {
    console.log('[test-hooks.js] afterEach');
    done();
  },
};