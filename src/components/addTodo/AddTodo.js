import React from 'react';
import {Link} from "react-router-dom";
import AddTodoForm from './AddTodoForm';
import {connect} from "react-redux";
import {addTodo} from "../../actions";

const AddTodo = ({addTodo}) => {
    const showResults = (values) => {
        addTodo(values);
    };

    return (
        <div>
            <Link to='/'>{'< back'}</Link>
            <h1>Add</h1>
            <AddTodoForm onSubmit={showResults} />
        </div>
    )
};

export default connect(
    null,
    { addTodo }
)(AddTodo);