"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResponse = void 0;
class BaseResponse {
    constructor(data, error) {
        this._data = data;
        this._error = error;
    }
    get Data() {
        return this._data;
    }
    set Data(value) {
        this._data = value;
    }
    get Error() {
        return this._error;
    }
    set Error(value) {
        this._error = value;
    }
}
exports.BaseResponse = BaseResponse;
