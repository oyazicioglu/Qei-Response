import { BaseError } from './BaseError';

export class BaseResponse<T> {
    private _data: T | undefined;
    public get Data(): T | undefined {
        return this._data;
    }
    public set Data(value: T | undefined) {
        this._data = value;
    }

    private _error: BaseError | undefined;
    public get Error(): BaseError | undefined {
        return this._error;
    }
    public set Error(value: BaseError | undefined) {
        this._error = value;
    }

    constructor(data?: T, error?: BaseError) {
        this._data = data;
        this._error = error;
    }
}
