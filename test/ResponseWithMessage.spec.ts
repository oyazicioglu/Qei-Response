import { ResponseWithMessage } from '../src/Response/ResponseWithMessage';

describe('ResponseWithMessage class', () => {
    const response = new ResponseWithMessage('Response message');

    test('Message property should have value of "Response message"', () => {
        expect(response.Message).toEqual('Response message');
    });
});
