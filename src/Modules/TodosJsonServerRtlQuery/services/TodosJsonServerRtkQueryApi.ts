import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ITodoQuery, JSON_SERVER_BASE_URL_TODOS } from 'Core/API';

export const TodosJsonServerRtkQueryApi = createApi({
    reducerPath: 'todosJsonServerRTKQuery',
    baseQuery: fetchBaseQuery({
        baseUrl: JSON_SERVER_BASE_URL_TODOS,
    }),
    tagTypes: ['JsonServerTodos'],
    endpoints: (build) => ({
        getJsonServerRtkQueryTodos: build.query<ITodoQuery[], number>({
            query: (limit?: number) => ({
                url: ``,
                method: 'GET',
                params: {
                    _limit: limit || 100,
                },
            }),
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'JsonServerTodos' as const, id })),
                          { type: 'JsonServerTodos', id: 'TODO-LIST' },
                      ]
                    : [{ type: 'JsonServerTodos', id: 'TODO-LIST' }],

            transformResponse: (todos: ITodoQuery[]) => todos.reverse(),
        }),
        addJsonServerRtkQueryTodos: build.mutation<ITodoQuery, Pick<ITodoQuery, 'title'>>({
            query: ({ title }) => ({
                url: ``,
                method: 'POST',
                body: {
                    title,
                    completed: false,
                },
            }),
            invalidatesTags: [{ type: 'JsonServerTodos', id: 'TODO-LIST' }],
        }),
        deleteJsonServerRtkQueryTodos: build.mutation<ITodoQuery, Pick<ITodoQuery, 'id'>>({
            query: ({ id }) => ({
                url: `${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'JsonServerTodos', id: 'TODO-LIST' }],
        }),
        updateCompletedJsonServerRtkQueryTodos: build.mutation<ITodoQuery, ITodoQuery>({
            query: ({ completed, id, title }) => ({
                url: `/${id}`,
                method: 'PUT',
                body: { completed, title },
            }),
            invalidatesTags: [{ type: 'JsonServerTodos', id: 'TODO-LIST' }],
        }),
    }),
});

export const {
    useGetJsonServerRtkQueryTodosQuery,
    useAddJsonServerRtkQueryTodosMutation,
    useDeleteJsonServerRtkQueryTodosMutation,
    useUpdateCompletedJsonServerRtkQueryTodosMutation,
} = TodosJsonServerRtkQueryApi;
