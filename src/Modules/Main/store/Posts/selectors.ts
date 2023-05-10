import { TRootState } from 'Store';
import { IPost } from 'Core/API';

export const placeholderPostsDataSelector = (state: TRootState): IPost[] =>
    state.postsPlaceholder.data || [];

export const placeholderPostsSelector = (state: TRootState) =>
    state.postsPlaceholder;
