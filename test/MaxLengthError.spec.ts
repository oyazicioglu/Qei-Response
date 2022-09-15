import { ErrorType } from '../src/Error/Base/ErrorType';
import { MaxLengthError } from '../src/Error/MaxLengthError';

describe('MaxLengthError class', () => {
    const charLength = 5;
    const maxLengthError = new MaxLengthError(300, charLength, 'Username');

    test('MaxLengthError Instance ErrorNumber must be 300', () => {
        expect(maxLengthError.ErrorNumber).toBe(300);
    });

    test(`MaxLengthError Instance Message must be Username must be shorter then ${charLength} characters.`, () => {
        expect(maxLengthError.Message).toBe(`Username must be shorter then ${charLength} characters.`);
    });

    test('MaxLengthError Instance Type must be 0', () => {
        expect(maxLengthError.Type).toBe(ErrorType.DANGER);
    });
});
