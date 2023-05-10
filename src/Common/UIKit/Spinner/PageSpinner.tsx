import React from 'react';
import { EBootstrapColors } from 'Core/enums';
import { Spinner } from 'Common/UIKit';

interface IPageSpinnerProps {
    color?: EBootstrapColors;
}

export const PageSpinner = (props: IPageSpinnerProps) => {
    const { color } = props;
    return (
        <div className="container page-loader">
            <Spinner color={color || EBootstrapColors.SUCCESS} />
        </div>
    );
};
