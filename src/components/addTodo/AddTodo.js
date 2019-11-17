import React from 'react';
import AddTodoForm from './AddTodoForm';
import {connect} from "react-redux";
import {addTodo} from "../../actions";
import {Container, Text, BackLink} from '../common/pageStyle';

const AddTodo = ({addTodo}) => {
    const showResults = (values) => {
        addTodo(values);
    };

    return (
        <Container>
            <Text>Add</Text>
            <BackLink to='/'>{'< back'}</BackLink>
            <AddTodoForm onSubmit={showResults} />
        </Container>
    )
};

export default connect(
    null,
    { addTodo }
)(AddTodo);