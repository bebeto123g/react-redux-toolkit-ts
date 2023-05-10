import React from 'react';
import { RouteObject } from 'react-router-dom';
import { MainPage } from 'Pages/MainPage';
import { AboutPage } from 'Pages/AboutPage';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
];
