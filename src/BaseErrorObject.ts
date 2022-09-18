import { ErrorType } from './BaseError';

export interface BaseErrorObject {
    ErrorNumber: number;
    ErrorType: ErrorType;
    Message: string;
}
