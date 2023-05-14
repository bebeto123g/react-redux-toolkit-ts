import React, { useCallback } from 'react';
import { SpinnerOverlay } from 'Common/UIKit';
import { AddTodo } from '../components/AddTodo';
import { ItemTodo } from '../components/ItemTodo';
import { useGetJsonServerRtkQueryTodosQuery } from '../services/TodosJsonServerRtkQueryApi';

export const TodosJsonServerRtlQueryView = () => {
    const { data: todos = [], isFetching, isError, refetch } = useGetJsonServerRtkQueryTodosQuery(50);

    const resetErrorBoundary = useCallback(() => {
        console.log('resetErrorBoundary');
        refetch();
    }, [refetch]);

    if (isError) {
        throw new Error('error useGetJsonServerRtkQueryTodosQuery', { cause: { resetErrorBoundary } });
    }

    return (
        <>
            <AddTodo />
            <SpinnerOverlay isLoading={isFetching}>
                <ul className="list-group">
                    {todos.map((todo) => {
                        return <ItemTodo key={todo.id} todo={todo} />;
                    })}
                </ul>
            </SpinnerOverlay>
        </>
    );
};
