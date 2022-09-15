import { BaseError } from './Base/BaseError';
import { ErrorType } from './Base/ErrorType';

export class MinLengthError extends BaseError {
    constructor(errorNumber: number, minLenth: number, emptyObjectName: string) {
        super(errorNumber, `${emptyObjectName} must be longer then ${minLenth} characters.`, ErrorType.DANGER);
    }
}
