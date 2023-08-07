import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, OutlinedInput } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import { EDndTableRouterPaths } from '../router/enums';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

interface ITableSelectRoutes {
    name: string;
    path: EDndTableRouterPaths;
}

const TABLE_ROUTES: ITableSelectRoutes[] = [
    { name: 'Default', path: EDndTableRouterPaths.DEFAULT },
    { name: 'Basic Table', path: EDndTableRouterPaths.BASIC },
    { name: 'Collabsible Table', path: EDndTableRouterPaths.COLLAPSIBLE },
    { name: 'Data Table', path: EDndTableRouterPaths.DATA },
    { name: 'Sorting Table', path: EDndTableRouterPaths.SORTING },
    { name: 'Stycky Header Table', path: EDndTableRouterPaths.STICKY_HEADER },
    { name: 'Virtualized Table', path: EDndTableRouterPaths.VIRTIALIZED },
    { name: 'Material Example Table', path: EDndTableRouterPaths.MATERIAL_REACT },
];

function getStyles(path: EDndTableRouterPaths, route: EDndTableRouterPaths, theme: Theme) {
    return {
        fontWeight:
            route.indexOf(path) === -1 || !path
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightBold,
    };
}

export const SelectRouter = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [route, setRoute] = React.useState(EDndTableRouterPaths.DEFAULT);

    const handleChange = (event: SelectChangeEvent<EDndTableRouterPaths>) => {
        const value = event.target.value as EDndTableRouterPaths;
        setRoute(value);
        navigate(value as string);
    };

    useEffect(() => {
        const { pathname } = location;
        const currentPath = Object.values(EDndTableRouterPaths).find(
            (path) => path && pathname.includes(path)
        );

        if (currentPath) {
            setRoute(currentPath);
        }
    }, []);

    return (
        <div>
            <FormControl sx={{ m: 5, width: 500, marginLeft: 0 }}>
                <InputLabel id="demo-multiple-name-label">Таблица</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={route}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >
                    {TABLE_ROUTES.map(({ name, path }) => (
                        <MenuItem key={path} value={path} style={getStyles(path, route, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};
