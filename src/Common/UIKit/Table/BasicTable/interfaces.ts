import { TableCellProps } from '@mui/material';

export interface IBasicTableColumns {
    label: string;
    key: string;
    order: number;
    align?: TableCellProps['align'];
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
