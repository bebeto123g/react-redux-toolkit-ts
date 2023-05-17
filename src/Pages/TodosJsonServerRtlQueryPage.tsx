import React from 'react';
import { ErrorBoundary } from 'Common/HOC';
import { TodosJsonServerRtlQueryView } from 'Modules/TodosJsonServerRtlQuery';

export const TodosJsonServerRtlQueryPage = () => {
    return (
        <ErrorBoundary errorFallback={<>Error fallback Test...</>}>
            <div className="container">
                <h1 className="h1 mb-5">Todos JsonServer RTKQuery Page</h1>
                <TodosJsonServerRtlQueryView />
            </div>
        </ErrorBoundary>
    );
};
