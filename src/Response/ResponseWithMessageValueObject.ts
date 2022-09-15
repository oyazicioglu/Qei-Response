import { BaseResponse } from './Base/BaseResponse';
import { ResponseValueObject } from './Base/ResponseValueObject';

export interface ResponseWithMessageValueObject<T> extends ResponseValueObject<T> {
    Message: string;
}
