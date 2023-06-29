import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPostQuery } from 'Core/API';
import { IUpdateSortPosts } from 'Modules/PostsJsonServerThunk/interfaces';
import { IAsyncStore } from 'Store/interfaces';
import { ReduxUtils } from 'Store/Utils';
// eslint-disable-next-line import/no-cycle
import {
    createPostJsonServerThunk,
    getPostsJsonServerThunk,
    removePostJsonServerThunk,
    updatePostJsonServerThunk,
} from './actions';

const initialState: IAsyncStore<IPostQuery[]> = ReduxUtils.createDefaultAsyncState();

/**
 * Это редюсер, который в RTK называется slice
 * */
export const postsSlice = createSlice({
    name: 'jsonServerThunk/posts',
    initialState,
    reducers: {
        addPostThunkMutate(state, action: PayloadAction<IPostQuery>) {
            state.data?.unshift(action.payload);
        },
        updatePostThunkMutate(state, action: PayloadAction<IPostQuery>) {
            const updatePost = state.data?.find((todo) => todo.id === action.payload.id);
            if (!updatePost) throw new Error('Оказия в updatePostThunkMutate');
            updatePost.title = action.payload.title;
        },
        removePostThunkMutate(state, action: PayloadAction<IPostQuery>) {
            state.data = state.data?.filter((post) => post.id !== action.payload.id) || null;
        },
        updatePostOrderMutate(state, action: PayloadAction<IUpdateSortPosts>) {
            // очевидно тут нужен связный список, но для простоты будем насиловать массив
            if (!state.data) return;
            const { currentPost, overPost } = action.payload;

            const overPostIndex = state.data.findIndex(({ id }) => overPost.id === id);
            const currentPostIndex = state.data.findIndex(({ id }) => currentPost.id === id);

            state.data.splice(currentPostIndex, 1);
            state.data.splice(overPostIndex, 0, currentPost);
        },
    },
    extraReducers: (builder) => {
        ReduxUtils.createThunkExtraReducers(getPostsJsonServerThunk, builder);

        builder.addCase(createPostJsonServerThunk.rejected.type, ReduxUtils.setThunkErrorAsyncState);
        builder.addCase(removePostJsonServerThunk.rejected.type, ReduxUtils.setThunkErrorAsyncState);
        builder.addCase(updatePostJsonServerThunk.rejected.type, ReduxUtils.setThunkErrorAsyncState);
    },
});

export const { addPostThunkMutate, removePostThunkMutate, updatePostThunkMutate, updatePostOrderMutate } =
    postsSlice.actions;
