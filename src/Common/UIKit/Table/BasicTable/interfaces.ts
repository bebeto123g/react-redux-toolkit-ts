export interface IBasicTableColumns {
    label: string;
    key: string;
    order: number;
}

interface IRequiredId {
    id: string;
}

export interface IBasicTableData extends IRequiredId {
    [key: string]: string;
}

export interface IBasicTableProps {
    minWidth?: number | string;
    columns: IBasicTableColumns[];
    data: IBasicTableData[];
}
