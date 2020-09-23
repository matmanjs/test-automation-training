const { bootstrap } = require('./e2e.config');

(async () => {
  await bootstrap({
    mockstarPort: 9527 || process.env.MOCKSTAR_PORT,
    whistlePort: 8899 || process.env.WHISTLE_PORT,
    useCurrentStartedWhistle: true,
  });
})();
