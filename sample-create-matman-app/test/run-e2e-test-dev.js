const { run } = require('./e2e.config');

(async () => {
  await run({ isBuildDev: true });
})();
