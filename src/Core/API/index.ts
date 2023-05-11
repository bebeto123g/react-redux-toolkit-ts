export { JSON_SERVER_BASE_URL } from './JsonServer/constants';

export type { IServicePlaceholderRequestParams } from './JsonPlaceholder/interfaces';
export  { JSON_PLACEHOLDER_BASE_URL } from './JsonPlaceholder/constants';

export { APIServicePlaceholder } from './JsonPlaceholder/service';
export type { ITodo, IPost } from './JsonPlaceholder/interfaces';

export { APIServiceJsonServer } from './JsonServer/service';
export type { IPostQuery, ITodoQuery } from './JsonServer/interfaces';
