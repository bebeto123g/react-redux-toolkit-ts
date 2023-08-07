import React from 'react';
import { BasicTable, IBasicTableColumns, IBasicTableData } from 'Common/UIKit/Table';

export const BasicTableColumns: IBasicTableColumns[] = [
    { label: 'Имя', key: 'name', order: 1 },
    { label: 'Гражданство', key: 'citizenship', order: 7 },
    { label: 'Должность', key: 'job', order: 3 },
    { label: 'Возраст', key: 'age', order: 2 },
    { label: 'Стаж', key: 'experience', order: 6 },
];

export const BasicTableData: IBasicTableData[] = [
    { id: '1', name: 'Пуппа', citizenship: 'РФ', job: 'Менеджер', age: '40', experience: '6' },
    { id: '2', name: 'Инокентий', citizenship: 'РФ', job: 'Аналитик', age: '34', experience: '4' },
    { id: '3', name: 'Ильич', citizenship: 'СССР', job: 'Руководитель', age: '70', experience: '10' },
    { id: '4', name: 'Аристах', citizenship: 'РФ', job: 'Мученик', age: '21', experience: '5' },
    { id: '5', name: 'Луппа', citizenship: 'РФ', job: 'Менеджер', age: '40', experience: '7' },
];

export const DNDBasicTable = () => {
    return <BasicTable minWidth={650} data={BasicTableData} columns={BasicTableColumns} />;
};
