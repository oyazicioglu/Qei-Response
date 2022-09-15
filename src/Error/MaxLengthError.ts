import { BaseError } from './Base/BaseError';
import { ErrorType } from './Base/ErrorType';

export class MaxLengthError extends BaseError {
    constructor(errorNumber: number, maxLength: number, emptyObjectName: string) {
        super(errorNumber, `${emptyObjectName} must be shorter then ${maxLength} characters.`, ErrorType.DANGER);
    }
}
