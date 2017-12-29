import {authHeader} from '../helpers';
import {settings} from "../config"


export const userService = {
    login,
    logout,
    register,
    getAll,
    getById
};


function login(history,username, password) {
    var body = `username=${username  }&password=${  password}`;

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: body,
    };

    console.log("----> body: " + body);


    console.log("API root: " + settings.API_ROOT);

    const url = `${settings.API_ROOT}/users/login`
    return fetch(url, requestOptions)
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
    .then((token_resp) => {
        console.log(`token_resp: ${  JSON.stringify(token_resp)}` );

        // ----------------------------------------------------------
        // login successful if there's a jwt token in the response
        // ----------------------------------------------------------
        if (token_resp && token_resp.token) {
            var user = {
                username: username,
                role:token_resp.role,
                token: token_resp.token,
            };

            // ------------------------------------------------------
            // store user details and jwt token in local storage
            // to keep user logged in between page refreshes
            // ------------------------------------------------------
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/');

        }

        return user;
    });
}

function logout(history) {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('API');
    history.push("/login");
}

function register(user) {
    var body = `username=${user.user_name  }&email=${user.email  }&password=${  user.password  }&first_name=${  user.first_name  }&last_name=${  user.last_name}`;

    console.log(`body: ${  body}`);

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: body,
    };
    const url = `${settings.API_ROOT}/users/signup`
    return fetch(url, requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch('/users', requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch(`/users/${  id}`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}


