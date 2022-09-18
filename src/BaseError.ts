import { BaseErrorObject } from './BaseErrorObject';
import { IValueObject } from './IValueObject';

export class BaseError implements IValueObject<BaseErrorObject> {
    private _errorNumber: number;
    public get ErrorNumber(): number {
        return this._errorNumber;
    }
    public set ErrorNumber(value: number) {
        this._errorNumber = value;
    }

    private _message: string;
    public get Message(): string {
        return this._message;
    }
    public set Message(value: string) {
        this._message = value;
    }

    private _type: ErrorType;
    public get Type(): ErrorType {
        return this._type;
    }
    public set Type(value: ErrorType) {
        this._type = value;
    }

    constructor(errorNumber: number, message: string, type: ErrorType) {
        this._errorNumber = errorNumber;
        this._message = message;
        this._type = type;
    }

    ToValueObject(): BaseErrorObject {
        return {
            ErrorNumber: this.ErrorNumber,
            Message: this.Message,
            ErrorType: this.Type,
        };
    }
}

export enum ErrorType {
    DANGER,
    INFO,
    WARNING,
}
