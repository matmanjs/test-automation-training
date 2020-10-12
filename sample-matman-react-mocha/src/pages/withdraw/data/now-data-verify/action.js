import { CALL_API } from '../../../../middlewares/api';

import { getData } from './model';

export const VERIFY_INFO_REQUEST = 'VERIFY_INFO_REQUEST';
export const VERIFY_INFO_REQUEST_SUCCESS = 'VERIFY_INFO_REQUEST_SUCCESS';
export const VERIFY_INFO_REQUEST_FAIL = 'VERIFY_INFO_REQUEST_FAIL';

function fetchVerifyInfo() {
  return {
    [CALL_API]: {
      types: [VERIFY_INFO_REQUEST, VERIFY_INFO_REQUEST_SUCCESS, VERIFY_INFO_REQUEST_FAIL],
      url: '//cgi.now.qq.com/cgi-bin/a/b/get_verify_status',
      type: 'get',
      data: {},
      convert: getData,
    },
  };
}

export function loadVerifyInfo() {
  return dispatch => dispatch(fetchVerifyInfo());
}
