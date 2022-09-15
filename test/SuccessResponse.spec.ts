import { SuccessResponse } from '../src/Response/SuccessResponse';

interface IUser {
    Name: string;
    Age: number;
}

describe('SuccessResponse class', () => {
    const successResponse = new SuccessResponse<IUser>({
        Age: 33,
        Name: 'Ömer',
    });

    test('SuccessResponse Data property must not be undefined', () => {
        expect(successResponse.Data).not.toBe(undefined);
    });

    test('SuccessResponse Error property must be undefined', () => {
        expect(successResponse.Error).toBe(undefined);
    });

    test('SuccessResponse Data.Age property must be 33', () => {
        expect(successResponse.Data?.Age).toEqual(33);
    });

    test('SuccessResponse Data.Name property must be Ömer', () => {
        expect(successResponse.Data?.Name).toEqual('Ömer');
    });
});
