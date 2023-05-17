import React, { FC } from 'react';
import { EBootstrapColors } from 'Core/enums';
import { Utils } from 'Core/Utils';
import 'Common/UIKit/Spinner/Spinner.scss';

export type TSpinnerProps = {
    small?: boolean;
    color?: EBootstrapColors;
    className?: string;
};

export const Spinner: FC<TSpinnerProps> = ({ small = false, color = '', className = '' }) => {
    const classes = Utils.classnames([
        'spinner-border',
        {
            ['spinner-border-sm']: small,
            [`text-${color}`]: color,
        },
        className,
    ]);

    return (
        <div className={classes} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};
