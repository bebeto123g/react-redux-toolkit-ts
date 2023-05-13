import { TRootState } from 'Store';
import { IPostQuery } from 'Core/API';

export const postsJsonServerDataSelector = (state: TRootState): IPostQuery[] =>
    state.postsJsonServer.data || [];

export const postsJsonServerSelector = (state: TRootState) =>
    state.postsJsonServer;
