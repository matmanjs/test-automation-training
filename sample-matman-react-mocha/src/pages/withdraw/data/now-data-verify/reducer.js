import {
  VERIFY_INFO_REQUEST,
  VERIFY_INFO_REQUEST_FAIL,
  VERIFY_INFO_REQUEST_SUCCESS,
} from './action';

/**
 * @type {Object}
 */
const initialState = {
  isLoaded: false,
  isIdVerified: false,
  isPhoneVerified: false,
};

export default function verifyInfo(state = initialState, action) {
  const { data, type } = action;
  let update = {};

  switch (type) {
    case VERIFY_INFO_REQUEST:
      break;

    case VERIFY_INFO_REQUEST_SUCCESS:
      update = {
        ...data,
        isLoaded: true,
      };

      break;
    case VERIFY_INFO_REQUEST_FAIL:
      update = {
        isLoaded: true,
      };
      break;

    default:
      break;
  }

  return Object.keys(update).length ? Object.assign({}, state, update) : state;
}
