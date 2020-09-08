const { useJquery } = require('web-crawl-util');

/**
 * 获得 webview 的信息
 */
function getWebviewInfo() {
  return {
    title: document.title,
    width: window.innerWidth,
    height: window.innerHeight,
    userAgent: navigator.userAgent,
  };
}

/**
 * 获得打招呼信息
 */
function getSayHelloInfo() {
  const result = {
    isExist: useJquery.isExist('#say-hello'),
  };

  if (result.isExist) {
    result.wording = useJquery.getText('#say-hello h1');
  }

  return result;
}

/**
 * 获得消息信息
 */
function getMsgInfo() {
  const result = {
    isExist: useJquery.isExist('#msg'),
  };

  if (result.isExist) {
    result.wording = useJquery.getText('#msg');
    result.isSuccess = $('#msg').hasClass('alert-success');
    result.isLoaded = $('#msg').hasClass('msg-loaded');
  }

  return result;
}

/**
 * 获得按钮信息
 */
function getBtnInfo() {
  const result = {
    isExist: useJquery.isExist('#btn'),
  };

  if (result.isExist) {
    result.wording = useJquery.getText('#btn');
  }

  return result;
}

module.exports = () => {
  return {
    webviewInfo: getWebviewInfo(),
    sayHelloInfo: getSayHelloInfo(),
    msgInfo: getMsgInfo(),
    btnInfo: getBtnInfo(),
  };
};
