import {
  BALANCE_INFO_REQUEST,
  BALANCE_INFO_REQUEST_FAIL,
  BALANCE_INFO_REQUEST_SUCCESS,
} from './action';

/**
 * @type {Object}
 */
const initialState = {
  isLoaded: false,
  available: 0,
  quotas: [],
};

export default function balanceInfo(state = initialState, action) {
  const { data, type } = action;
  let update = {};

  switch (type) {
    case BALANCE_INFO_REQUEST:
      break;

    case BALANCE_INFO_REQUEST_SUCCESS:
      update = {
        ...data,
        isLoaded: true,
      };
      break;

    case BALANCE_INFO_REQUEST_FAIL:
      update = {
        isLoaded: true,
      };
      break;

    default:
      break;
  }

  return Object.keys(update).length ? Object.assign({}, state, update) : state;
}
