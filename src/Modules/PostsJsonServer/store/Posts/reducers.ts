import { createSlice } from '@reduxjs/toolkit';
import { IPostQuery } from 'Core/API';
import { getPostsPlaceholderThunk } from './actions';
import { ReduxUtils } from 'Store/Utils';
import { IAsyncStore } from 'Store/interfaces';
import { EProcessStatus } from 'Store/enums';

const initialState: IAsyncStore<IPostQuery[]> = {
    data: null,
    error: null,
    status: EProcessStatus.IDLE,
};

/**
 * Это редюсер, который в RTK называется slice
 * */
export const postsSlice = createSlice({
    name: 'jsonServer/posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        ReduxUtils.createThunkExtraReducers(getPostsPlaceholderThunk, builder);
    },
});
