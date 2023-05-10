import React from 'react';
import { PageSpinner } from 'Common/UIKit';
import { EBootstrapColors } from 'Core/enums';

export const MainPage = () => {
    return (
        <div className="container">
            <h1 className="h1">MainPage</h1>
            <div>
                Learn React
                <br />
                <button className="btn btn-outline-secondary">
                    <i className="bi bi-alarm"></i> Кнопка из bootstrap
                </button>
                <button className="btn btn-secondary">
                    <i className="bi bi-alarm"></i> Кнопка из bootstrap
                </button>
                <button className="btn btn-danger">
                    <i className="bi bi-exclamation-triangle-fill"></i> Кнопка из bootstrap
                </button>
                <button className="btn btn-outline-danger">
                    <i className="bi bi-exclamation-triangle-fill"></i> Кнопка из bootstrap
                </button>
            </div>
            <PageSpinner color={EBootstrapColors.DANGER} />
        </div>
    );
};
