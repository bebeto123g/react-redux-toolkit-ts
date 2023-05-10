import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from 'Core/API';
import { IAsyncStore } from 'Store';
import { getPostsPlaceholderThunk } from 'Modules/Main/store/Posts/actions';

const initialState: IAsyncStore<IPost[]> = {
    data: null,
    error: null,
    isLoading: false,
};

/**
 * Это редюсер, который в RTK называется slice
 * */
export const postsSlice = createSlice({
    name: 'placeholder/posts',
    initialState,
    reducers: {},
    extraReducers: {
        [getPostsPlaceholderThunk.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
            state.isLoading = false;
            state.error = null;
            state.data = action.payload;
        },
        [getPostsPlaceholderThunk.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getPostsPlaceholderThunk.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});
