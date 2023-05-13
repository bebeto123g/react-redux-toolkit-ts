import React, { useMemo } from 'react';
import { SpinnerOverlay } from 'Common/UIKit';
import { AddTodo } from '../components/AddTodo';
import { ItemTodo } from '../components/ItemTodo';
import { useGetJsonServerRtkQueryTodosQuery } from '../services/TodosJsonServerRtkQueryApi';

export const TodosJsonServerRtlQueryView = () => {
    const { data: todos = [], isFetching, error } = useGetJsonServerRtkQueryTodosQuery(50);

    const sortedPosts = useMemo(() => {
        return todos.slice().reverse();
    }, [todos]);

    if (error) {
        // @ts-ignore
        return <p className="text-danger">{error?.data?.message || error?.status || 'Оказия'}</p>;
    }

    return (
        <>
            <AddTodo />
            <SpinnerOverlay isLoading={isFetching}>
                <ul className="list-group">
                    {sortedPosts.map((todo) => {
                        return <ItemTodo key={todo.id} todo={todo} />;
                    })}
                </ul>
            </SpinnerOverlay>
        </>
    );
};
