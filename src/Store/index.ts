import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PostsJsonServerService, postsSlice } from 'Modules/PostsJsonServer';
import { PostsPlaceholderService } from 'Modules/PostsPlaceholder/services/PostsPlaceholderService';

const rootReducer = combineReducers({
    postsJsonServer: postsSlice.reducer,
    [PostsPlaceholderService.reducerPath]: PostsPlaceholderService.reducer,
    [PostsJsonServerService.reducerPath]: PostsJsonServerService.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                PostsPlaceholderService.middleware,
                PostsJsonServerService.middleware
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
