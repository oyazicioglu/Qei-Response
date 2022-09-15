import { ValuableObject } from '../../Lib/ValuableObject';
import { ErrorType } from './ErrorType';
import { ErrorValueObject } from './ErrorValueObject';

export class BaseError implements ValuableObject<ErrorValueObject> {
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

    ToValueObject(): ErrorValueObject {
        return {
            Message: this.Message,
            Number: this.ErrorNumber,
            Type: this.Type,
        };
    }
}
