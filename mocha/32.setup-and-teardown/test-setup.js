// root hook to run before all test
before(() => {
  console.log('[test-setup.js] before');
});

// root hook to run before every test (even in other files)
beforeEach(() => {
  console.log('[test-setup.js] beforeEach');
});

// root hook to run after all test
after(() => {
  console.log('[test-setup.js] after');
});

// root hook to run after every test (even in other files)
afterEach(function () {
  console.log('[test-setup.js] afterEach');
});