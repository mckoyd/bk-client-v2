import { API_BASE_URL } from '../config';
import { clearAuthToken, saveAuthToken } from '../local-storage';
import jwtDecode from 'jwt-decode';


export const SET_AUTH = 'SET_AUTH';
export const setAuth = authToken => ({ type: SET_AUTH, authToken });

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({ type: CLEAR_AUTH });

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({ type: AUTH_REQUEST });

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = user => ({ type: AUTH_SUCCESS, user});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = err => ({ type: AUTH_ERROR, err });

export const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuth(authToken));
    dispatch(authSuccess(decodedToken));
    saveAuthToken(authToken);
}

export const loginParent = (username, password) => dispatch => {
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/users/login_parent`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }) 
        })
        .then(res => {
            if(!res.ok) res.json()
                .then(err => dispatch(authError(err)))
            else res.json()
                .then(({ token }) => storeAuthInfo(token, dispatch))
        })
        .catch(err => console.log(err))
    );
}

export const loginChild = (username, password) => dispatch => {
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/users/login_child`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }) 
        })
        .then(res => {
            if(!res.ok) res.json()
                .then(err => dispatch(authError(err)))
            else res.json()
                .then(({ token }) => storeAuthInfo(token, dispatch))
        })
        .catch(err => console.log(err))
    );
}

