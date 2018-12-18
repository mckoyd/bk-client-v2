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

export const CHILD_AUTH_ERROR = 'CHILD_AUTH_ERROR';
export const childAuthError = err => ({ type: CHILD_AUTH_ERROR, err })

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
        .catch(err => dispatch(authError(err)))
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

export const signupParent = (username, password, password2, name, email) => dispatch => {
    return (
        fetch(`${API_BASE_URL}/users/register_parent`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, password2, name, email }) 
        })
        .then(res => {
            if(!res.ok) res.json()
                .then(err => dispatch(authError(err)))
            else res.json()
                .then(() => dispatch(loginParent(username, password)))
        })
        .catch(err => console.log(err))
    );
}

export const signupChild = (username, name, password, password2, avatarChoice) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return (
        fetch(`${API_BASE_URL}/users/register_child`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${authToken}` },
            body: JSON.stringify({ username, name, password, password2, avatarChoice})
        })
        .then(res => {
            if(!res.ok) res.json()
                .then(err => dispatch(childAuthError(err)))
            else res.json()
                .then(res => dispatch(refreshAuthToken()))
        })
        .catch(err => console.log(err))
    )
}

export const refreshAuthToken = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return (
        fetch(`${API_BASE_URL}/users/refresh`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${authToken}`}
        })
        .then(res => {
            if(!res.ok) res.json()
                .then(err => dispatch(authError(err)))
            else res.json()
                .then(({token}) => storeAuthInfo(token, dispatch))
        })
        .catch(err => console.log(err))
    );
}