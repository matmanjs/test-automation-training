import { FLOW_REQUEST, FLOW_REQUEST_FAIL, FLOW_REQUEST_SUCCESS } from './action';

/**
 * @type {Object}
 */
const initialState = {
  isLoaded: false,
  flowType: '',
  appid: 0,
  list: [],
};

export default function transactionInfo(state = initialState, action) {
  const { data, type } = action;
  let update = {};

  switch (type) {
    case FLOW_REQUEST:
      break;
    case FLOW_REQUEST_SUCCESS:
      update = {
        isLoaded: true,
        flowType: data.flowType,
        appid: data.appid,
        list: data.list,
      };
      break;
    case FLOW_REQUEST_FAIL:
      update = {
        isLoaded: true,
      };
      break;
    default:
      break;
  }

  return Object.keys(update).length ? Object.assign({}, state, update) : state;
}
