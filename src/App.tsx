import React from 'react';
import './Styles/global.scss';

export const App = () => {
    return (
        <div className="container">
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
    );
};
