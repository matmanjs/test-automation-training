import { CALL_API } from '../../../../middlewares/api';

import { getData } from './model';

export const BALANCE_INFO_REQUEST = 'BALANCE_INFO_REQUEST';
export const BALANCE_INFO_REQUEST_SUCCESS = 'BALANCE_INFO_REQUEST_SUCCESS';
export const BALANCE_INFO_REQUEST_FAIL = 'BALANCE_INFO_REQUEST_FAIL';

function fetchBalanceInfo() {
  return {
    [CALL_API]: {
      types: [BALANCE_INFO_REQUEST, BALANCE_INFO_REQUEST_SUCCESS, BALANCE_INFO_REQUEST_FAIL],
      url: '//cgi.now.qq.com/cgi-bin/a/b/get_balance',
      type: 'get',
      data: {
        activeid: 10001,
      },
      convert: getData,
    },
  };
}

export function loadBalanceInfo() {
  return dispatch => dispatch(fetchBalanceInfo());
}
