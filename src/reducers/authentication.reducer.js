// ---------------------------------------------------------------------------------------------
// The redux authentication reducer manages the state related to login (and logout) actions,
// on successful login the current user object and a loggedIn flag are stored in the
// authentication section of the application state.
//
// On logout or login failure the authentication state is set to an empty object,
// and during login (between login request and success/failure) the authentication
// state has a loggingIn flag set to true and a user object with the details of the
// user that is attempting to login.
// ---------------------------------------------------------------------------------------------

import {userConstants} from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user} : {loggedIn: false};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,

      };
    case userConstants.LOGIN_SUCCESS:
      console.log('[authentication-reducer] : LOGIN_SUCCESS');
      return {
        loggedIn: true,
        user: action.user,
        
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
