const { useJquery } = require('web-crawl-util');

function getVueInfo() {
  return {
    title: useJquery.getText('#app .hello .vue-info h1'),
    desc: useJquery.getText('#app .hello .vue-info p'),
  };
}

function getSearchGithub() {
  const searchList = [];

  $('#app .hello .search-github .search-result .search-result-ul li').each(
    function() {
      const $this = $(this);

      searchList.push({
        imgUrl: useJquery.getImageDomUrl('.github-avatar-url', $this),
        userName: useJquery.getText('.github-user-name', $this),
        htmlUrl: useJquery.getText('.github-html-url', $this),
      });
    }
  );

  return {
    title: useJquery.getText('#app .hello .search-github .title'),
    searchBtn01Text: useJquery.getText(
      '#app .hello .search-github .search-actions .search-btn.btn01'
    ),
    searchBtn02Text: useJquery.getText(
      '#app .hello .search-github .search-actions .search-btn.btn02'
    ),
    tips: useJquery.getTotal('#app .hello .search-github .tips'),
    searchList,
  };
}

module.exports = () => {
  return {
    vueInfo: getVueInfo(),
    searchGithub: getSearchGithub(),
  };
};
