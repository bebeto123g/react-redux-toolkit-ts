import React from 'react';
import { RouteObject } from 'react-router-dom';
import { MainPage } from 'Pages/MainPage';
import { PostsJsonServerPageRtk } from 'Pages/PostsJsonServerPageRTK';
import { PostsJsonServerPageThunk } from 'Pages/PostsJsonServerPageThunk';
import { PostsPlaceholderPage } from 'Pages/PostsPlaceholderPage';
import { TodosJsonServerRtlQueryPage } from 'Pages/TodosJsonServerRtlQueryPage';
import { ERouterPaths } from 'Router/enums';

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
