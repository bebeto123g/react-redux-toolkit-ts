import { IPostQuery } from 'Core/API';

export interface IPostUpdate {
    id: number;
    order: number;
}

export interface IUpdateSortPosts {
    currentPost: IPostQuery;
    overPost: IPostQuery;
}
