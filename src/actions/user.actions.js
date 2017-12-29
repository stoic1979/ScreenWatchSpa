import {userConstants} from '../constants';
import {userService} from '../services';
import {alertActions} from './';


export const userActions = {
  login,
  logout,
  register,
  getApi,
  getAll,
  delete: _delete,
};


// 
//------------------- Login -----------------
//
function login(history, email, password) {
  return (dispatch) => {
    dispatch(request({email}));

    userService.login(history,email, password)
            .then(
                (user) => {
                  dispatch(success(user));
                  console.log('FIXME :: action:login: push / ???');
                  
                },
                (error) => {
                  dispatch(failure(error));
                  dispatch(alertActions.error(error));
                }
            );
  };



  function request(user) {
    return {type: userConstants.LOGIN_REQUEST, user};
  }
  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error};
  }
}



// 
//------------------- Logout  --------------------
//

function logout(history) {
  console.log('[user-action] logout');

  userService.logout(history);
  

  console.log('FIXME :: action:login: push /login ???');
 
  return {type: userConstants.LOGOUT};
}


// 
//------------------- Register --------------------
//

function register(history, user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user)
            .then(
                (user) => {
                  dispatch(success());
                  console.log('FIXME :: action:login: push /login ???');
                  history.push('/');
                  dispatch(alertActions.success('Registration successful'));
                },
                (error) => {
                  dispatch(failure(error));
                  dispatch(alertActions.error(error));
                }
            );
  };

  function request(user) {
    return {type: userConstants.REGISTER_REQUEST, user};
  }
  function success(user) {
    return {type: userConstants.REGISTER_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.REGISTER_FAILURE, error};
  }
}



// 
//------------------- Request API --------------------
//

function getApi(history,token) {
  return (dispatch) => {
    dispatch(requestApi());

    userService.getApi(token)
            .then(
                (users) => {
                  dispatch(success(users));
                  // history.push('/');
                },

                (error) => dispatch(failure(error))
            );
  };
  function requestApi() {
    return {type: userConstants.API_REQUEST};
  }
   function success(users) {
    return {type: userConstants.API_SUCCESS, users};
  }
  function failure(error) {
    return {type: userConstants.API_FAILURE, error};
  }
}


// 
//-------------------Request  list of users --------------------
//


function getAll() {
  return (dispatch) => {
    dispatch(request());

    userService.getAll()
            .then(
                (users) => dispatch(success(users)),
                (error) => dispatch(failure(error))
            );
  };

  

  function request() {
    return {type: userConstants.GETALL_REQUEST};
  }
  function success(users) {
    return {type: userConstants.GETALL_SUCCESS, users};
  }
  function failure(error) {
    return {type: userConstants.GETALL_FAILURE, error};
  }
}



// 
//-------------------Delete  user --------------------
//

// prefixed function name with underscore because delete is a reserved word in javascript


function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    userService.delete(id)
            .then(
                (user) => {
                  dispatch(success(id));
                },
                (error) => {
                  dispatch(failure(id, error));
                }
            );
  };

  function request(id) {
    return {type: userConstants.DELETE_REQUEST, id};
  }
  function success(id) {
    return {type: userConstants.DELETE_SUCCESS, id};
  }
  function failure(id, error) {
    return {type: userConstants.DELETE_FAILURE, id, error};
  }
}
