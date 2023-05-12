import { createSlice } from '@reduxjs/toolkit';
import { IPostQuery } from 'Core/API';
import { IAsyncStore } from 'Store';
import { getPostsPlaceholderThunk } from './actions';
import { ReduxUtils } from 'Store/Utils';

const initialState: IAsyncStore<IPostQuery[]> = {
    data: null,
    error: null,
    isLoading: false,
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
