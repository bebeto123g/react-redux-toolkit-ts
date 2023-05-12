import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IAsyncStore } from 'Store';

type TThunk<T> = ReturnType<typeof createAsyncThunk<T>>;
type TBuilder<T> = ActionReducerMapBuilder<IAsyncStore<T>>;

export class ReduxUtils {
    static createThunkExtraReducers<T>(thunk: TThunk<T>, builder: TBuilder<unknown>) {
        builder.addCase(thunk.fulfilled.type, (state, action: PayloadAction<unknown>) => {
            state.isLoading = false;
            state.error = null;
            state.data = action.payload;
        });

        builder.addCase(thunk.pending.type, (state) => {
            state.isLoading = true;
        });

        builder.addCase(thunk.rejected.type, (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    }
}
