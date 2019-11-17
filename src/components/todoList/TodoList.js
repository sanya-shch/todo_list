import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getTodos} from '../../actions';
import TodoItem from "./TodoItem";
import {getTodosSelector, getLoadingSelector, getTotalTodosCountSelector} from '../../selectors';

const TodoList = ({getTodos, todos, loading, totalTodosCount}) => {
    const [currentPageValues, setCurrentPageValues] = useState({page: 1, sort_field: 'id', sort_direction: 'asc'});
    const [todosPerPage] = useState(3);
    useEffect(() => {
        getTodos(currentPageValues);
    },[currentPageValues]);

    const handleClickPage = (event) => setCurrentPageValues({...currentPageValues, page: Number(event.target.id)});

    const handleClickSort = (event) => {
        const etn = event.target.getAttribute('data-sort_field');
        const ets = event.target.getAttribute('data-sort_direction');
        setCurrentPageValues({...currentPageValues, sort_field: etn, sort_direction: ets});
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalTodosCount / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderTodos = todos.map((todo, index) => <TodoItem key={index} todo={todo}/>);

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
                key={number}
                id={number}
                onClick={handleClickPage}
            >
                {number}
            </li>
        );
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <button data-sort_field='id' data-sort_direction='asc' onClick={e => handleClickSort(e)}>↑</button>
                        id
                        <button data-sort_field='id' data-sort_direction='desc' onClick={e => handleClickSort(e)}>↓</button>
                    </div>
                    <div>
                        <button data-sort_field='username' data-sort_direction='asc' onClick={e => handleClickSort(e)}>↑</button>
                        username
                        <button data-sort_field='username' data-sort_direction='desc' onClick={e => handleClickSort(e)}>↓</button>
                    </div>
                    <div>
                        <button data-sort_field='email' data-sort_direction='asc' onClick={e => handleClickSort(e)}>↑</button>
                        email
                        <button data-sort_field='email' data-sort_direction='desc' onClick={e => handleClickSort(e)}>↓</button>
                    </div>
                    <div>
                        <button data-sort_field='status' data-sort_direction='asc' onClick={e => handleClickSort(e)}>↑</button>
                        status
                        <button data-sort_field='status' data-sort_direction='desc' onClick={e => handleClickSort(e)}>↓</button>
                    </div>
                </div>
                <div>
                    {renderTodos}
                </div>
                <ul>
                    {renderPageNumbers}
                </ul>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    todos: getTodosSelector(state),
    loading: getLoadingSelector(state),
    totalTodosCount: getTotalTodosCountSelector(state)
});

export default connect(
    mapStateToProps,
    { getTodos }
)(TodoList);