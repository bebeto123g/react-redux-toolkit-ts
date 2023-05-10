import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIServicePlaceholder } from 'Core/API';

export const getPostsPlaceholderThunk = createAsyncThunk(
    'placeholder/posts/getAll',
    async (_, thunkAPI) => {
        try {
            return await APIServicePlaceholder.getPostsPages({ pageSize: 100 });
        } catch (e) {
            const error = e as Error;
            thunkAPI.rejectWithValue(error.message || 'Оказия');
        }
    }
);
