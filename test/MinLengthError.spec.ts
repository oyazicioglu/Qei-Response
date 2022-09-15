import { ErrorType } from '../src/Error/Base/ErrorType';
import { MinLengthError } from '../src/Error/MinLengthError';

describe('MinLength class', () => {
    const charLength = 5;
    const minLength = new MinLengthError(300, charLength, 'Username');

    test('MinLengthError Instance ErrorNumber must be 300', () => {
        expect(minLength.ErrorNumber).toBe(300);
    });

    test(`MinLengthError Instance Message must be Username must be longer then ${charLength} characters.`, () => {
        expect(minLength.Message).toBe(`Username must be longer then ${charLength} characters.`);
    });

    test('MinLengthError Instance Type must be 0', () => {
        expect(minLength.Type).toBe(ErrorType.DANGER);
    });
});
