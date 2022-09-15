import { BaseError } from '../../Error/Base/BaseError';
import { ErrorValueObject } from '../../Error/Base/ErrorValueObject';
import { BaseResponse } from './BaseResponse';

export class ErrorResponse extends BaseResponse<ErrorValueObject> {
    constructor(error: BaseError) {
        super(undefined, error);
    }
}
