import {screenshotConstants} from '../constants';

export function screenshots(state = {}, action) {
  switch (action.type) {
    case screenshotConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case screenshotConstants.GETALL_SUCCESS:
    console.log("screenshot reducer got response" + action.screenshots);
      return  action.screenshots ;
    case screenshotConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };

    
    default:
      return state;
  }
}
  