import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    // extraReducers: (builder) => {
    //     const SUCCESS = getPostsPlaceholderThunk.fulfilled.type;
    //     const ERROR = getPostsPlaceholderThunk.rejected.type;
    //     const PENDING = getPostsPlaceholderThunk.pending.type;
    //
    //     builder.addCase(SUCCESS, (state, action: PayloadAction<IPostQuery[]>) => {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.data = action.payload;
    //     });
    //
    //     builder.addCase(PENDING, (state) => {
    //         state.isLoading = true;
    //     });
    //
    //     builder.addCase(ERROR, (state, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     });
    // },
    extraReducers: (builder) => {
        ReduxUtils.createThunkExtraReducers(getPostsPlaceholderThunk, builder);
    },
});
