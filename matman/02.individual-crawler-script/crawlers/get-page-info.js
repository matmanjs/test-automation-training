function getSearchResultInfo() {
  const result = [];
  const doms = document.querySelectorAll('#content_left .c-container .t');
  if (doms) {
    doms.forEach(curDom => {
      result.push(curDom.innerText);
    });
  }
  return result;
}

module.exports = () => {
  return {
    title: document.title,
    width: window.innerWidth,
    height: window.innerHeight,
    userAgent: navigator.userAgent,
    searchBtnTxt: document.querySelector('#su').value,
    searchKeyWorld: document.querySelector('#kw').value,
    searchResultInfo: getSearchResultInfo()
  };
};
