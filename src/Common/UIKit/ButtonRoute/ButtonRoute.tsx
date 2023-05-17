import React, { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { EBootstrapColors } from 'Core/enums';
import { Utils } from 'Core/Utils';
import { ERouterPaths } from 'Router';

interface IButtonRouteProps extends NavLinkProps {
    to: ERouterPaths;
    className?: string;
    variant?: EBootstrapColors;
    outline?: boolean;
}

export const ButtonRoute: FC<IButtonRouteProps> = (props) => {
    const { children, to, variant = 'secondary', outline = false, className = '', ...otherProps } = props;
    const classes = Utils.classnames([className, 'btn', `btn-${outline ? 'outline-' : ''}${variant}`]);

    return (
        <NavLink to={to} className={classes} {...otherProps}>
            {children}
        </NavLink>
    );
};
