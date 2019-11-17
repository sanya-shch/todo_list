import React from 'react';
import {Link} from "react-router-dom";
import TodoList from "../todoList/TodoList";

const HomePage = () => {
    return (
        <div>
            <h1>TodoList</h1>
            <Link to='/create'>ADD</Link>
            <TodoList/>
        </div>
    )
};

export default HomePage;