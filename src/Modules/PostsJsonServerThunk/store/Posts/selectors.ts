import { IPostQuery } from 'Core/API';
import { TRootState } from 'Store';

export const postsJsonServerDataSelector = (state: TRootState): IPostQuery[] =>
    state.postsJsonServer.data || [];

export const postsJsonServerSelector = (state: TRootState) => state.postsJsonServer;
