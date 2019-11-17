import {
    ADD_TODO,
    ADD_TODO_ERROR,
    GET_TODOS,
    SET_LOADING,
    GET_TODOS_ERROR,
    EDIT_TODO,
    EDIT_TODO_ERROR
} from '../actions/types';

const initialState = {
    todos: [],
    totalTodosCount: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload.tasks,
                totalTodosCount: action.payload.total_task_count,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_TODOS_ERROR:
        case EDIT_TODO_ERROR:
        case ADD_TODO_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        case EDIT_TODO:
            return {
                ...state,
                loading: false
            };
        case ADD_TODO:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};