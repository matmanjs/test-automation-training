const { useJquery } = require('web-crawl-util');

module.exports = () => {
  return {
    info: getGithubInfo(),
    remarks: 'Got data by npm package: web-crawl-util'
  };
};
// 获取页面数据
function getGithubInfo() {
  const parentSelector = '.container';
  const result = {
    isExit: useJquery.isExist(parentSelector)
  }
  if (result.isExit) {
    result.githubName = useJquery.getText('.github-user-name', parentSelector)
    result.githubURL = useJquery.getText('.github-html-url', parentSelector)

  }
  return result;
}
