import React from 'react';
import { Spinner } from 'Common/UIKit';
import { EBootstrapColors } from 'Core/enums';
import { Utils } from 'Core/Utils';

interface IPageSpinnerProps {
    color?: EBootstrapColors;
    className?: string;
}

export const PageSpinner = (props: IPageSpinnerProps) => {
    const { color, className = '' } = props;

    return (
        <div className={Utils.classnames(['page-spinner', className])}>
            <Spinner color={color || EBootstrapColors.SUCCESS} />
        </div>
    );
};
