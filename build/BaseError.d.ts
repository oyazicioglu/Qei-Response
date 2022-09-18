import { BaseErrorObject } from './BaseErrorObject';
import { IValueObject } from './IValueObject';
export declare class BaseError implements IValueObject<BaseErrorObject> {
    private _errorNumber;
    get ErrorNumber(): number;
    set ErrorNumber(value: number);
    private _message;
    get Message(): string;
    set Message(value: string);
    private _type;
    get Type(): ErrorType;
    set Type(value: ErrorType);
    constructor(errorNumber: number, message: string, type: ErrorType);
    ToValueObject(): BaseErrorObject;
}
export declare enum ErrorType {
    DANGER = 0,
    INFO = 1,
    WARNING = 2
}
