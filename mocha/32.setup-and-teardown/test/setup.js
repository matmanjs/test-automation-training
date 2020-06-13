// root hook to run before all test
before(() => {
  console.log('[hooks] before');
});

// root hook to run before every test (even in other files)
beforeEach(() => {
  console.log('[hooks] beforeEach');
});

// root hook to run after all test
after(() => {
  console.log('[hooks] after');
});

// root hook to run after every test (even in other files)
afterEach(function () {
  console.log('[hooks] afterEach');
});