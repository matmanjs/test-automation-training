/**
 * 格式化
 *  {
        "id_verify_ts": 0,
        "phone_verify_ts": 0
    }
 * @param {Object} data CGI中返回的原始的信息
 * @return {Object}
 */
export function getData(data = {}) {
  // 这里的钱单位都是分
  const obj = {
    idVerifyTs: data.id_verify_ts || 0,
    phoneVerifyTs: data.phone_verify_ts || 0,
  };

  obj.isIdVerified = !!obj.idVerifyTs;
  obj.isPhoneVerified = !!obj.phoneVerifyTs;

  return obj;
}
