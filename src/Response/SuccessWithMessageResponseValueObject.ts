import { ResponseValueObject } from './Base/ResponseValueObject';

export interface SuccessWithMessageResponseValueObject<T> extends ResponseValueObject<T> {
    Message: string;
}
