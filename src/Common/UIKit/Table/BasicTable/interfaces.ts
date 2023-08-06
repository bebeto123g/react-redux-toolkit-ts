import { TableCellProps } from '@mui/material';

interface IBasicTableColumns {
    label: string;
    key: string;
    order: number;
    align?: TableCellProps['align'];
}

interface IBasicTableData {
    label: string;
    key: string;
    order: number;
}

export interface IBasicTableProps {
    minWidth?: number | string;
    columns: IBasicTableColumns[];
    data: IBasicTableData[];
}
