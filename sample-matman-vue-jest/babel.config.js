const enableE2ETest = process.env.ENABLE_E2E_TEST;
const pluginForE2ETest = [
  'istanbul',
  {
    extension: ['.js', '.vue'],
    useInlineSourceMaps: false,
  },
];

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: enableE2ETest ? [pluginForE2ETest] : [],
};
