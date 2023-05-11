import React from 'react';
import { RouteObject } from 'react-router-dom';
import { MainPage } from 'Pages/MainPage';
import { AboutPage } from 'Pages/AboutPage';
import { PostsPlaceholderPage } from 'Pages/PostsPlaceholderPage';
import { PostsJsonServerPage } from 'Pages/PostsJsonServerPage';
import { ERouterPaths } from 'Router/enums';
import { PostsJsonServerPageRtk } from 'Pages/PostsJsonServerPageRTK';

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
        element: <PostsJsonServerPage />,
    },
    {
        path: ERouterPaths.POSTS_JSON_SERVER_RTK,
        element: <PostsJsonServerPageRtk />,
    },
    {
        path: ERouterPaths.ABOUT,
        element: <AboutPage />,
    },
];
