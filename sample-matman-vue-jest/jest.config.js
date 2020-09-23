module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/test/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  reporters: [
    'default',
    [
      'jest-matman-reporter',
      {
        publicPath: './.matman_output',
        filename: 'report.html',
        expand: true,
      },
    ],
  ],
};
