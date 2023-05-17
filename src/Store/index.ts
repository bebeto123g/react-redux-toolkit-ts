import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PostsJsonServerServiceApi } from 'Modules/PostsJsonServerRtkQuery';
import { postsSlice } from 'Modules/PostsJsonServerThunk';
import { PostsPlaceholderService } from 'Modules/PostsPlaceholder/services/PostsPlaceholderService';
import { TodosJsonServerRtkQueryApi } from 'Modules/TodosJsonServerRtlQuery';

const rootReducer = combineReducers({
    postsJsonServer: postsSlice.reducer,
    [PostsPlaceholderService.reducerPath]: PostsPlaceholderService.reducer,
    [PostsJsonServerServiceApi.reducerPath]: PostsJsonServerServiceApi.reducer,
    [TodosJsonServerRtkQueryApi.reducerPath]: TodosJsonServerRtkQueryApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                PostsPlaceholderService.middleware,
                PostsJsonServerServiceApi.middleware,
                TodosJsonServerRtkQueryApi.middleware
            ),
    });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppState = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppState['dispatch'];

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
