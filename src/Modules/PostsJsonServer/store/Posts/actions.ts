import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIServiceJsonServer } from 'Core/API';

export const getPostsPlaceholderThunk = createAsyncThunk(
    'jsonServer/posts/getAll',
    (_, thunkAPI) => {
        try {
            return APIServiceJsonServer.getPosts();
        } catch (e) {
            const error = e as Error;
            thunkAPI.rejectWithValue(error.message || 'Оказия');
        }
    }
);
