import { CALL_API } from '../../../../middlewares/api';

import { getData } from './model';

export const WITHDRAW_MONEY_REQUEST = 'WITHDRAW_MONEY_REQUEST';
export const WITHDRAW_MONEY_REQUEST_SUCCESS = 'WITHDRAW_MONEY_REQUEST_SUCCESS';
export const WITHDRAW_MONEY_REQUEST_FAIL = 'WITHDRAW_MONEY_REQUEST_FAIL';

function fetchWithdrawMoney(amount) {
  return {
    [CALL_API]: {
      types: [WITHDRAW_MONEY_REQUEST, WITHDRAW_MONEY_REQUEST_SUCCESS, WITHDRAW_MONEY_REQUEST_FAIL],
      url: '//cgi.now.qq.com/cgi-bin/a/b/withdraw_money',
      type: 'get',
      data: {
        amount,
        activeid: 10001,
      },
      transferParam: {
        amount,
      },
      convert: getData,
    },
  };
}

export function loadWithdrawMoney(amount) {
  return dispatch => dispatch(fetchWithdrawMoney(amount));
}
