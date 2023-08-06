import React from 'react';
import { Outlet } from 'react-router-dom';
import { DndMaterialTableView } from 'Modules/DndMaterialTable';

export const DndMaterialTablePage = () => {
    return (
        <div className="container">
            <h1 className="h1">DND Table Page</h1>
            <DndMaterialTableView />
            <Outlet />
        </div>
    );
};
