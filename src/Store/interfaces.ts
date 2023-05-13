import { EProcessStatus } from './enums';

export interface IAsyncStore<T> {
    status: EProcessStatus;
    data: T | null;
    error: string | null;
}