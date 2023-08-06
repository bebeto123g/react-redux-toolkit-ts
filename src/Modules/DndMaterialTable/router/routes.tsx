import { RouteObject } from 'react-router-dom';
import { BasicTable } from '../components/Table/BasicTable';
import { CollapsibleTable } from '../components/Table/CollapsibleTable';
import { DataTable } from '../components/Table/DataTable';
import { SortingTable } from '../components/Table/SortingTable';
import { StickyHeadTable } from '../components/Table/StickyHeaderTable';
import { ReactVirtualizedTable } from '../components/Table/VirtualizedTable';
import { EmptyTableView } from '../views/EmptyTableView';
import { EDndTableRouterPaths } from './enums';

export const dndTableRoutes: RouteObject[] = [
    {
        path: EDndTableRouterPaths.DEFAULT,
        element: <EmptyTableView />,
    },
    {
        path: EDndTableRouterPaths.BASIC,
        element: <BasicTable />,
    },
    {
        path: EDndTableRouterPaths.COLLAPSIBLE,
        element: <CollapsibleTable />,
    },
    {
        path: EDndTableRouterPaths.DATA,
        element: <DataTable />,
    },
    {
        path: EDndTableRouterPaths.SORTING,
        element: <SortingTable />,
    },
    {
        path: EDndTableRouterPaths.STICKY_HEADER,
        element: <StickyHeadTable />,
    },
    {
        path: EDndTableRouterPaths.VIRTIALIZED,
        element: <ReactVirtualizedTable />,
    },
];
