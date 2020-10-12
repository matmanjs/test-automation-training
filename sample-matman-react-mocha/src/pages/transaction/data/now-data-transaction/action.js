import { CALL_API } from '../../../../middlewares/api';

import { getData } from './model';

export const FLOW_REQUEST = 'FLOW_REQUEST';
export const FLOW_REQUEST_SUCCESS = 'FLOW_REQUEST_SUCCESS';
export const FLOW_REQUEST_FAIL = 'FLOW_REQUEST_FAIL';

function fetchFlow() {
  return {
    [CALL_API]: {
      types: [FLOW_REQUEST, FLOW_REQUEST_SUCCESS, FLOW_REQUEST_FAIL],
      url: '//cgi.now.qq.com/cgi-bin/a/b/get_flow',
      data: {
        appid: 10086,
        type: 0,
      },
      convert: getData,
    },
  };
}

export function loadFlow() {
  return dispatch => dispatch(fetchFlow());
}
