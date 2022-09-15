import { SuccessWithMessageResponse } from '../src/Response/SuccessWithMessageResponse';
describe('ResponseWithMessage class', () => {
    const response = new SuccessWithMessageResponse('Response message');

    test('Message property should have value of "Response message"', () => {
        expect(response.Message).toEqual('Response message');
    });
});
