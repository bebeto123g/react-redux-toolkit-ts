import { RouteObject } from 'react-router-dom';
import { dndTableRoutes } from 'Modules/DndMaterialTable';
import { DndMaterialTablePage } from 'Pages/DndMaterialTablePage';
import { MainPage } from 'Pages/MainPage';
import { NotFoundPage } from 'Pages/NotFoundPage';
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
    {
        path: ERouterPaths.DND_MATERIAL_TABLE,
        element: <DndMaterialTablePage />,
        children: dndTableRoutes,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
];
