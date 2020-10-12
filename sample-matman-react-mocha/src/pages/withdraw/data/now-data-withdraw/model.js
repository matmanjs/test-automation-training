/**
 * 格式化
 *  {
        "err": "",
        "result": 0
    }
 * @param {Object} data CGI中返回的原始的信息
 * @return {Object}
 */
export function getData(data = {}) {
  // 这里的钱单位都是分
  const obj = {
    result: data.result,
    err: data.err || '',
    isSuccess: data.result === 0,
  };

  obj._cgi_data = data;

  return obj;
}
