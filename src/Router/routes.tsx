import React from 'react';
import { RouteObject } from 'react-router-dom';
import { MainPage } from 'Pages/MainPage';
import { PostsPlaceholderPage } from 'Pages/PostsPlaceholderPage';
import { PostsJsonServerPageThunk } from 'Pages/PostsJsonServerPageThunk';
import { ERouterPaths } from 'Router/enums';
import { PostsJsonServerPageRtk } from 'Pages/PostsJsonServerPageRTK';
import { TodosJsonServerRtlQueryPage } from 'Pages/TodosJsonServerRtlQueryPage';

export const routes: RouteObject[] = [
    {
        path: ERouterPaths.HOME,
        element: <MainPage />,
    },
    {
        path: ERouterPaths.POSTS_PLACEHOLDER,
        element: <PostsPlaceholderPage />,
    },
    {
        path: ERouterPaths.POSTS_JSON_SERVER,
        element: <PostsJsonServerPageThunk />,
    },
    {
        path: ERouterPaths.POSTS_JSON_SERVER_RTK,
        element: <PostsJsonServerPageRtk />,
    },
    {
        path: ERouterPaths.TODOS_JSON_SERVER_RTK,
        element: <TodosJsonServerRtlQueryPage />,
    },
];
