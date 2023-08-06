import { RouteObject } from 'react-router-dom';
import { CollapsibleTable } from '../components/Table/CollapsibleTable';
import { DataTable } from '../components/Table/DataTable';
import { DNDBasicTable } from '../components/Table/DNDBasicTable';
import { SortingTable } from '../components/Table/SortingTable';
import { StickyHeadTable } from '../components/Table/StickyHeaderTable';
import { VirtualizedTable } from '../components/Table/VirtualizedTable';
import { EmptyTableView } from '../views/EmptyTableView';
import { EDndTableRouterPaths } from './enums';

export const dndTableRoutes: RouteObject[] = [
    {
        path: EDndTableRouterPaths.DEFAULT,
        element: <EmptyTableView />,
    },
    {
        path: EDndTableRouterPaths.BASIC,
        element: <DNDBasicTable />,
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
        element: <VirtualizedTable />,
    },
];
