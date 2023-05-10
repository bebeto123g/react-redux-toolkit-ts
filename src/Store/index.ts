import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { postsSlice } from 'Modules/Main';

const rootReducer = combineReducers({
    postsPlaceholder: postsSlice.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppState = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppState['dispatch'];

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export interface IAsyncStore<T> {
    data: T | null,
    isLoading: boolean,
    error: string | null,
}
