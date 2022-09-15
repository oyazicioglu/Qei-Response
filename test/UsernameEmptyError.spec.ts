import { ErrorType } from '../src/Error/Base/ErrorType';
import { EmptyError } from '../src/Error/EmptyError';

class UsernameEmptyError extends EmptyError {
    constructor() {
        super(100, 'Username');
    }
}

describe('Username Empty Error', () => {
    const usernameEmptyError = new UsernameEmptyError();
    test('UsernameEmptyError should not empty', () => {
        expect(usernameEmptyError).not.toBe(undefined);
    });

    test('UsernameEmptyError ErrorNumber should be 100', () => {
        expect(usernameEmptyError.ErrorNumber).toEqual(100);
    });

    test('UsernameEmptyError Message should be "Username should not be empty."', () => {
        expect(usernameEmptyError.Message).toEqual('Username should not be empty.');
    });

    test('UsernameEmptyError Type shlould be 0 (ErrorType.DANGER)', () => {
        expect(usernameEmptyError.Type).toEqual(ErrorType.DANGER);
    });
});
