import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIServiceJsonServer, IPostQuery } from 'Core/API';
import { ReduxUtils } from 'Store/Utils';
import { IAsyncStore } from 'Store/interfaces';

const initialState: IAsyncStore<IPostQuery[]> = ReduxUtils.createDefaultAsyncState();

export const getPostsJsonServerThunk = createAsyncThunk(
    'jsonServerThunk/posts/getAll',
    async (_, thunkAPI) => {
        try {
            const posts = await APIServiceJsonServer.getPosts();
            return posts.reverse();
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
    },
    extraReducers: (builder) => {
        ReduxUtils.createThunkExtraReducers(getPostsJsonServerThunk, builder);

        builder.addCase(createPostJsonServerThunk.rejected.type, ReduxUtils.setThunkErrorAsyncState);
        builder.addCase(removePostJsonServerThunk.rejected.type, ReduxUtils.setThunkErrorAsyncState);
        builder.addCase(updatePostJsonServerThunk.rejected.type, ReduxUtils.setThunkErrorAsyncState);
    },
});

const { addPostThunkMutate, removePostThunkMutate, updatePostThunkMutate } = postsSlice.actions;
