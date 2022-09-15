import { ErrorValueObject } from '../../Error/Base/ErrorValueObject';

export interface ResponseValueObject<T> {
    Error?: ErrorValueObject;
    Data?: T;
}
