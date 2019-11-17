import React from 'react';
import TodoList from "../todoList/TodoList";
import {Container, Text, AddLink} from '../common/pageStyle';

const HomePage = () => {
    return (
        <Container>
            <Text>TodoList</Text>
            <AddLink to='/create'>ADD</AddLink>
            <TodoList/>
        </Container>
    )
};

export default HomePage;