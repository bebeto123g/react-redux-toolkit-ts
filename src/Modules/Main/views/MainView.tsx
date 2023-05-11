import React from 'react';
import { ButtonRoute } from 'Common/UIKit';
import { EBootstrapColors } from 'Core/enums';
import { ERouterPaths } from 'Router';

export const MainView = () => {
    return (
        <div>
            <ButtonRoute
                to={ERouterPaths.POSTS_PLACEHOLDER}
                variant={EBootstrapColors.SUCCESS}
                outline
            >
                Placeholder Posts
            </ButtonRoute>
        </div>
    );
};
