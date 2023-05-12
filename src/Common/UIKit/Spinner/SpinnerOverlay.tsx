import React, { FC, PropsWithChildren } from 'react';
import { EBootstrapColors } from 'Core/enums';
import { Utils } from 'Core/Utils';
import { PageSpinner } from './PageSpinner';

interface ISpinnerOverlayProps {
    isLoading: boolean;
    color?: EBootstrapColors;
}

export const SpinnerOverlay: FC<PropsWithChildren<ISpinnerOverlayProps>> = (props) => {
    const { children, isLoading, color } = props;
    const classes = Utils.classnames([
        { 'spinner-overlay--visible': isLoading },
        'spinner-overlay',
    ]);

    return (
        <div className={classes}>
            <PageSpinner color={color} />
            <div className="spinner-overlay-content">
                {children}
            </div>
        </div>
    );
};
