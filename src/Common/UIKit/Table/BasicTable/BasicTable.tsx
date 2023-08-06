import React, { useMemo } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { IBasicTableProps } from './interfaces';

export const BasicTable = (props: IBasicTableProps) => {
    const { minWidth = 'auto', columns, data } = props;

    const sortColumns = useMemo(() => {
        return columns.sort((a, b) => a.order - b.order);
    }, [columns]);

    return (
        <TableContainer>
            <Table sx={{ minWidth }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {sortColumns.map((column) => (
                            <TableCell key={column.key} align={column.align}>
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            {sortColumns.map(({ key, align }) => (
                                <TableCell key={key + row.id} align={align}>
                                    {row[key] || '-'}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
