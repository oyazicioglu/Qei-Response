import { BaseError } from './BaseError';
export declare class BaseResponse<T> {
    private _data;
    get Data(): T | undefined;
    set Data(value: T | undefined);
    private _error;
    get Error(): BaseError | undefined;
    set Error(value: BaseError | undefined);
    constructor(data?: T, error?: BaseError);
}
