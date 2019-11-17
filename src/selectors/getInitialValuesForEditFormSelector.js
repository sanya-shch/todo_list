import {createSelector} from "reselect";

const getInitialValuesForEditFormSelector = createSelector(
    (state, id) => state.todos.todos.find((todoItem) => todoItem.id === id*1),
    (todo) => todo);

export default getInitialValuesForEditFormSelector;