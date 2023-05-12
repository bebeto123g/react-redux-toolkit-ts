import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IAsyncStore } from 'Store';

type TThunk<T> = ReturnType<typeof createAsyncThunk<T>>;
type TBuilder<T> = ActionReducerMapBuilder<IAsyncStore<T>>;

export class ReduxUtils {
    static createThunkExtraReducers<T>(thunk: TThunk<T>, builder: TBuilder<unknown>) {
        const SUCCESS = thunk.fulfilled.type;
        const ERROR = thunk.rejected.type;
        const PENDING = thunk.pending.type;

        builder.addCase(SUCCESS, (state, action: PayloadAction<unknown>) => {
            state.isLoading = false;
            state.error = null;
            state.data = action.payload;
        });

        builder.addCase(PENDING, (state) => {
            state.isLoading = true;
        });

        builder.addCase(ERROR, (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
}
