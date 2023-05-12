import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIServiceJsonServer } from 'Core/API';

export const getPostsPlaceholderThunk = createAsyncThunk(
    'jsonServer/posts/getAll',
    async (_, thunkAPI) => {
        try {
            return await APIServiceJsonServer.getPosts();
        } catch (e) {
            const error = e as Error;
            return thunkAPI.rejectWithValue(error?.message || 'Оказия');
        }
    }
);


// TODO посмотреть как в лентере T для типов и I для интерфейсов делать
