import { BaseError } from '../src/Error/Base/BaseError';
import { ErrorType } from '../src/Error/Base/ErrorType';
import { ErrorResponse } from '../src/Response/Base/ErrorResponse';

describe('SuccessResponse class', () => {
    const errorResponse = new ErrorResponse(new BaseError(200, 'Message', ErrorType.WARNING));

    test('SuccessResponse Data property must be undefined', () => {
        expect(errorResponse.Data).toBe(undefined);
    });

    test('SuccessResponse Error property must no be undefined', () => {
        expect(errorResponse.Error).not.toBe(undefined);
    });

    test('SuccessResponse Error.Number property must be 200', () => {
        expect(errorResponse.Error?.ErrorNumber).toEqual(200);
    });

    test('SuccessResponse Error.Message property must be Message', () => {
        expect(errorResponse.Error?.Message).toEqual('Message');
    });

    test('SuccessResponse Error.Type property must be 2', () => {
        expect(errorResponse.Error?.Type).toEqual(ErrorType.WARNING);
    });
});
