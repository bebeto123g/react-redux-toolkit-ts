import { TAppDispatch } from 'Store';
import { APIServicePlaceholder } from 'Core/API';
import { postsSlice } from 'Modules/Main/store/Posts/reducers';

export const getPostsPlaceholder = () => async (dispatch: TAppDispatch) => {
    try {
        dispatch(postsSlice.actions.getPosts());
        const posts = await APIServicePlaceholder.getPostsPages({ pageSize: 100 });
        dispatch(postsSlice.actions.getPostsSuccess(posts));
    } catch (e) {
        const error = e as Error;
        dispatch(postsSlice.actions.getPostsError(error.message));
    }
};
