import { combineReducers } from 'redux';

import { transactionInfo } from '../pages/transaction/data/now-data-transaction';
import { balanceInfo } from '../pages/withdraw/data/now-data-balance';
import { verifyInfo } from '../pages/withdraw/data/now-data-verify';
import { withdrawInfo } from '../pages/withdraw/data/now-data-withdraw';

const rootReducer = combineReducers({
  transactionInfo,
  balanceInfo,
  verifyInfo,
  withdrawInfo,
});

export default rootReducer;
