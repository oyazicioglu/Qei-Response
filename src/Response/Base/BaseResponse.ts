import { BaseError } from '../../Error/Base/BaseError';
import { ValuableObject } from '../../Lib/ValuableObject';
import { ResponseValueObject } from './ResponseValueObject';

export class BaseResponse<T> implements ValuableObject<ResponseValueObject<T>> {
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

    ToValueObject(): ResponseValueObject<T> {
        return {
            Data: this.Data,
            Error: this.Error?.ToValueObject(),
        };
    }
}
