import React from 'react';
import { TodosJsonServerRtlQueryView } from 'Modules/TodosJsonServerRtlQuery';

export const TodosJsonServerRtlQueryPage = () => {
    return (
        <div className="container">
            <h1 className="h1 mb-5">Todos JsonServer RTKQuery Page</h1>
            <TodosJsonServerRtlQueryView />
        </div>
    );
};
