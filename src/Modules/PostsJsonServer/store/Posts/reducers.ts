import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostQuery } from 'Core/API';
import { IAsyncStore } from 'Store';
import { getPostsPlaceholderThunk } from './actions';

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
        builder.addCase(
            getPostsPlaceholderThunk.fulfilled.type,
            (state, action: PayloadAction<IPostQuery[]>) => {
                state.isLoading = false;
                state.error = null;
                state.data = action.payload;
            }
        );

        builder.addCase(getPostsPlaceholderThunk.pending.type, (state) => {
            state.isLoading = true;
        });

        builder.addCase(
            getPostsPlaceholderThunk.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        );
    },
});
