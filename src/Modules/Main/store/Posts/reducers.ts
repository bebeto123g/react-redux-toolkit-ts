import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from 'Core/API';
import { IAsyncStore } from 'Store';

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
    reducers: {
        getPosts(state) {
            state.isLoading = true;
        },
        getPostsError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        getPostsSuccess(state, action: PayloadAction<IPost[]>) {
            state.isLoading = false;
            state.error = null;
            state.data = action.payload;
        },
    },
});
