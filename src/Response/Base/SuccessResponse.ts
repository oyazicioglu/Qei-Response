import { BaseResponse } from './BaseResponse';

export class SuccessResponse<T> extends BaseResponse<T> {
    constructor(data: T) {
        super(data, undefined);
    }
}
