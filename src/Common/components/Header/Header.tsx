import React from 'react';
import { NavLink } from 'Common/UIKit';
import { ERouterPaths } from 'Router';

export const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-success mb-3">
            <div className="container-fluid">
                <div className="mb-lg-0 d-flex align-items-center gap-3">
                    <NavLink to={ERouterPaths.HOME}>Home</NavLink>
                    <NavLink to={ERouterPaths.POSTS_PLACEHOLDER}>Posts Placeholder</NavLink>
                    <NavLink to={ERouterPaths.POSTS_JSON_SERVER}>Posts JsonServer</NavLink>
                    <NavLink to={ERouterPaths.POSTS_JSON_SERVER_RTK}>Posts JsonServer RTK</NavLink>
                    <NavLink to={ERouterPaths.ABOUT}>About</NavLink>
                </div>
            </div>
        </nav>
    );
};
