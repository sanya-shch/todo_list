import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: localStorage.getItem('token') !== null,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true
            };
        case LOGIN_FAIL:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
                isAuthenticated: false
            };
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false
            };
        default:
            return state;
    }
};