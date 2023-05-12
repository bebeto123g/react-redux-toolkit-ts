import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PostsJsonServerServiceApi, postsSlice } from 'Modules/PostsJsonServer';
import { PostsPlaceholderService } from 'Modules/PostsPlaceholder/services/PostsPlaceholderService';

const rootReducer = combineReducers({
    postsJsonServer: postsSlice.reducer,
    [PostsPlaceholderService.reducerPath]: PostsPlaceholderService.reducer,
    [PostsJsonServerServiceApi.reducerPath]: PostsJsonServerServiceApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                PostsPlaceholderService.middleware,
                PostsJsonServerServiceApi.middleware
            ),
    });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppState = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppState['dispatch'];

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export interface IAsyncStore<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
}
