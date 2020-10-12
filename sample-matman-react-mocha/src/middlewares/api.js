import axios from 'axios';

const STATUS = 'storeStatus';

export const CALL_API = 'Call API';

function getFullUrl(url) {
  if (url.indexOf('http') === 0) {
    return url;
  }

  if (url.indexOf('//') === 0) {
    return url;
  }

  return `${window.location.protocol}//${window.location.hostname}${url}`;
}

// eslint-disable-next-line no-unused-vars
export default store => next => (action) => {
  /**
   * opts 字段说明：
   *  url: CGI请求地址
   *  types: action的type值数组，按顺序依次代表: requestType, successType, failureType
   *  type: ajax的类型，get或者post
   *  data: 请求的参数对象
   *  convert: 自定义处理数据的函数
   *
   * @type {{url:String, types:String[], type:String, data:Object}}
   */
  const opts = action[CALL_API];

  if (typeof opts === 'undefined') {
    return next(action);
  }

  // 二次处理请求的opts中的参数
  const { type } = opts;
  const [requestType, successType, failureType] = opts.types;

  opts.type = (type ? type : 'get').toLowerCase();

  /**
   * 触发action
   * @param {Object} _action
   * @returns {*}
   */
  function actionWith(_action) {
    const newAction = Object.assign(action, _action);

    // 'wait' 'fetching' 'success' 'fail'
    const obj = {
      [STATUS]: 'fetching',
    };

    switch (newAction.type) {
      case successType:
        obj[STATUS] = 'success';
        break;
      case failureType:
        obj[STATUS] = 'fail';
        break;
      default:
        break;
    }

    if (obj[STATUS] !== 'fetching') {
      newAction.data = Object.assign(newAction.data || {}, obj);
    } else {
      newAction.data = {};
    }

    const finalAction = newAction;

    delete finalAction[CALL_API];

    return finalAction;
  }

  // 在请求发送之前，首先会触发 request 的action，表示要发送请求了
  const data = Object.assign({}, opts.data);
  next(actionWith({
    type: requestType,
    data,
  }));

  const requestURL = getFullUrl(opts.url);

  const requestPromise = (opts.type === 'get') ? axios.get(requestURL, {
    params: opts.data,
  }) : axios.post(requestURL, opts.data);

  return requestPromise
    .then((res) => {
      function convertData(data) {
        if (typeof opts.convert === 'function') {
          return opts.convert(data);
        }
        return data;
      }

      const isSuccess = res.data && (res.data.retcode === 0);

      // 如果是失败类型则特殊处理
      if (!isSuccess) {
        return Promise.reject(res.data);
      }

      const finalAction = actionWith({
        type: successType,
        transferParam: opts.transferParam,
        data: convertData(res.data.result),
        opts,
      });

      next(finalAction);

      return finalAction;
    })
    .catch((err) => {
      // ios8下面 stack会存在
      if (err && err.stack && !err.errno) {
        // error
        setTimeout(() => {
          throw err;
        }, 0);
      } else {
        const finalAction = actionWith({
          type: failureType,
          error: err,
        });

        next(finalAction);

        return Promise.reject(finalAction);
      }
    });
};
