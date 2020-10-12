const { bootstrap } = require('./e2e.config');

(async () => {
  await bootstrap({
    projectPort: 3000 || process.env.PROJECT_PORT,
    mockstarPort: 9527 || process.env.MOCKSTAR_PORT,
    whistlePort: 8899 || process.env.WHISTLE_PORT,
    useCurrentStartedWhistle: true,
    isBuildDev: true,
  });
})();
