import axios from "axios";
import {
    ADD_TODO,
    ADD_TODO_ERROR,
    EDIT_TODO,
    EDIT_TODO_ERROR,
    GET_TODOS,
    GET_TODOS_ERROR,
    SET_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "./types";

const developerName = 'shchipkov';

export const getTodos = ({ page, sort_field, sort_direction }) => dispatch => {
    dispatch(setLoading());

    axios
        .get(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=${developerName}&page=${page}&sort_field=${sort_field}&sort_direction=${sort_direction}`)
        .then(res => dispatch({
            type: GET_TODOS,
            payload: res.data.message
        }))
        .catch(err => dispatch({
            type: GET_TODOS_ERROR,
            payload: err
        }));
};

export const addTodo = ({ username, email, text }) => dispatch => {
    dispatch(setLoading());

    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("text", text);

    axios
        .post(
            `https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=${developerName}`,
            data,
            { headers: {'Content-Type': 'multipart/form-data' }}
        )
        .then(() => dispatch({
            type: ADD_TODO
        }))
        .catch(err => dispatch({
            type: ADD_TODO_ERROR,
            payload: err
        }));
};

export const editTodo = ({ id, text, status }) => dispatch => {
    dispatch(setLoading());

    const data = new FormData();
    data.append("text", text);
    data.append("status", status);
    data.append("token", localStorage.getItem('token'));

    axios
        .post(
            `https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${id}?developer=${developerName}`,
            data,
            { headers: {'Content-Type': 'multipart/form-data' }}
        )
        .then(() => dispatch({
            type: EDIT_TODO
        }))
        .catch(err => dispatch({
            type: EDIT_TODO_ERROR,
            payload: err
        }));
};

export const logIn = ({ username, password }) => dispatch => {
    dispatch(setLoading());

    const data = new FormData();
    data.append("username", username);
    data.append("password", password);

    axios
        .post(
            `https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=${developerName}`,
            data,
            { headers: {'Content-Type': 'multipart/form-data' }}
        )
        .then(res => {
            localStorage.setItem('token', res.data.message.token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.message.token
            })
        })
        .catch(err => dispatch({
            type: LOGIN_FAIL,
            payload: err
        }));
};

export const logOut = () => {
    return {
        type: LOGOUT
    };
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
