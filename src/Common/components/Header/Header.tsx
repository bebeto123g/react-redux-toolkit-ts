import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-success mb-3">
            <div className="container-fluid">
                <div className="mb-lg-0">
                    <NavLink className="navbar-brand" to="/">
                        Home
                    </NavLink>
                    <NavLink className="navbar-brand" to="/about">
                        About
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
