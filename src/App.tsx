import React, { Suspense, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from 'Router';
import { Header } from 'Common/components';
import { PageSpinner } from 'Common/UIKit';
import 'Styles/global.scss';
import { dbRepositoryId } from 'IndexDB';

export const App = () => {
    const appRoutes = useRoutes(routes);

    useEffect(() => {
        dbRepositoryId.save({ id: '42', text: 'Task text' });
        dbRepositoryId.save({ id: '43', text: 'Task text Rule' });
    }, []);

    useEffect(() => {
        const dbAsync = async () => {
            const all = await dbRepositoryId.findAll();
            const $43 = await dbRepositoryId.findById('43');

            console.log({ all, $43 });
        };

        dbAsync();
    }, []);

    return (
        <>
            <Header />
            <Suspense fallback={<PageSpinner />}>{appRoutes}</Suspense>
        </>
    );
};
