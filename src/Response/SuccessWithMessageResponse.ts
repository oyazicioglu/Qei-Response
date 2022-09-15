import { ValuableObject } from '../Lib/ValuableObject';
import { BaseResponse } from './Base/BaseResponse';
import { SuccessWithMessageResponseValueObject } from './SuccessWithMessageResponseValueObject';

export class SuccessWithMessageResponse<T> extends BaseResponse<T> implements ValuableObject<SuccessWithMessageResponseValueObject<T>> {
    private _message: string;
    public get Message(): string {
        return this._message;
    }
    public set Message(value: string) {
        this._message = value;
    }

    constructor(message: string, data?: T) {
        super(data, undefined);
        this._message = message;
    }

    ToValueObject(): SuccessWithMessageResponseValueObject<T> {
        return {
            Data: this.Data,
            Error: this.Error?.ToValueObject(),
            Message: this.Message,
        };
    }
}
