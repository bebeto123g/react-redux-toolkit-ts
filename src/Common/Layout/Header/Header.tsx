import React from 'react';
import { NavLink } from 'Common/UIKit';
import { ERouterPaths } from 'Router';

export const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-success mb-3">
            <div className="container-fluid">
                <div className="mb-lg-0 d-flex align-items-center gap-4">
                    <NavLink to={ERouterPaths.HOME}>Home</NavLink>
                    <NavLink to={ERouterPaths.POSTS_PLACEHOLDER}>Posts Placeholder</NavLink>
                    <NavLink to={ERouterPaths.POSTS_JSON_SERVER}>Posts JsonServer Thunk</NavLink>
                    <NavLink to={ERouterPaths.POSTS_JSON_SERVER_RTK}>Posts JsonServer RTK</NavLink>
                    <NavLink to={ERouterPaths.TODOS_JSON_SERVER_RTK}>Todos JsonServer RTK</NavLink>
                    <NavLink to={ERouterPaths.DND_MATERIAL_TABLE}>DND Table</NavLink>
                </div>
            </div>
        </nav>
    );
};
