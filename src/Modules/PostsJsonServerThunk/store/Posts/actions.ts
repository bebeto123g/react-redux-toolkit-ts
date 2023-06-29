import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIServiceJsonServer, IPostQuery } from 'Core/API';
import { Utils } from 'Core/Utils';
// eslint-disable-next-line import/no-cycle
import { addPostThunkMutate, removePostThunkMutate, updatePostThunkMutate } from './reducers';

export const getPostsJsonServerThunk = createAsyncThunk(
    'jsonServerThunk/posts/getAll',
    async (_, thunkAPI) => {
        try {
            const responsePosts = await APIServiceJsonServer.getPosts();
            const posts = responsePosts.map((post) => {
                post.order = post.id;
                return post;
            });
            // якобы должна быть езе сортировка по order
            return posts.sort(Utils.sortPostOrder);
        } catch (e) {
            const error = e as Error;
            return thunkAPI.rejectWithValue(error?.message || 'Оказия');
        }
    }
);

export const createPostJsonServerThunk = createAsyncThunk(
    'jsonServerThunk/posts/create',
    async (arg: Pick<IPostQuery, 'title'>, { rejectWithValue, dispatch }) => {
        try {
            const post = await APIServiceJsonServer.createPost({
                title: arg.title,
                text: '',
                createDate: new Date().toISOString(),
            });

            dispatch(addPostThunkMutate(post));
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const removePostJsonServerThunk = createAsyncThunk(
    'jsonServerThunk/posts/remove',
    async (post: IPostQuery, { rejectWithValue, dispatch }) => {
        try {
            await APIServiceJsonServer.deletePost(post.id);
            dispatch(removePostThunkMutate(post));
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);

export const updatePostJsonServerThunk = createAsyncThunk(
    'jsonServerThunk/posts/update',
    async (post: IPostQuery, { rejectWithValue, dispatch }) => {
        try {
            const updatePost = await APIServiceJsonServer.updatePost(post);
            dispatch(updatePostThunkMutate(updatePost));
        } catch (e) {
            const error = e as Error;
            return rejectWithValue(error.message);
        }
    }
);
