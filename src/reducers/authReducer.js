import {
    SET_AUTH,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    CHILD_AUTH_ERROR
} from '../actions/auth';

const initState = {
    authToken: null,
    loading: false,
    error: null,
    user: null
};

export default (state=initState, action) => {
    switch(action.type){
        case SET_AUTH:
            return { ...state, 
                authToken: action.authToken
            };
        case CLEAR_AUTH:
            return {
                ...state,
                authToken: null,
                user: null,
                error: null,
                loading: false
            };
        case AUTH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case AUTH_ERROR:
            return {
                ...state,
                loading: false,
                user: null,
                authToken: null,
                error: action.err
            }
        case CHILD_AUTH_ERROR:
            return {
                ...state, 
                error: action.err,
                loading: false
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.user
            }
        default:
            return state;
    }
};
