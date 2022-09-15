import { BaseResponse } from './Base/BaseResponse';

export class SuccessResponse<T> extends BaseResponse<T> {
    constructor(data: T) {
        super(data, undefined);
    }
}
