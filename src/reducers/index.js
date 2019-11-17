import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import todos from './todosReducer';
import auth from './authReducer';

export default combineReducers({
    todos,
    auth,
    form
});