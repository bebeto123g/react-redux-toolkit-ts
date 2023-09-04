import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from 'App';
import { setupStore } from 'Store';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from 'dev';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
                <App />
            </DevSupport>
        </Provider>
    </BrowserRouter>
);
