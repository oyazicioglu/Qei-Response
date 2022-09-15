import { BaseError } from './Base/BaseError';
import { ErrorType } from './Base/ErrorType';

export class EmptyError extends BaseError {
    constructor(errorNumber: number, emptyObjectName: string) {
        super(errorNumber, `${emptyObjectName} should not be empty.`, ErrorType.DANGER);
    }
}
