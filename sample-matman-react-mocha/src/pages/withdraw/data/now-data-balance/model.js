/**
 * 格式化
 *  {
        'cur_money': 700,
        'quotas': [500, 1500, 3000]
    }
 * @param {Object} data CGI中返回的原始的信息
 * @return {Object}
 */
export function getData(data = {}) {
  // 这里的钱单位都是分
  const obj = {
    available: data.cur_money || 0,
    quotas: data.quotas || [],
  };

  return obj;
}
