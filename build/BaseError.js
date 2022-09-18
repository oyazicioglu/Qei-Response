"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorType = exports.BaseError = void 0;
class BaseError {
    constructor(errorNumber, message, type) {
        this._errorNumber = errorNumber;
        this._message = message;
        this._type = type;
    }
    get ErrorNumber() {
        return this._errorNumber;
    }
    set ErrorNumber(value) {
        this._errorNumber = value;
    }
    get Message() {
        return this._message;
    }
    set Message(value) {
        this._message = value;
    }
    get Type() {
        return this._type;
    }
    set Type(value) {
        this._type = value;
    }
    ToValueObject() {
        return {
            ErrorNumber: this.ErrorNumber,
            Message: this.Message,
            ErrorType: this.Type,
        };
    }
}
exports.BaseError = BaseError;
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["DANGER"] = 0] = "DANGER";
    ErrorType[ErrorType["INFO"] = 1] = "INFO";
    ErrorType[ErrorType["WARNING"] = 2] = "WARNING";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
