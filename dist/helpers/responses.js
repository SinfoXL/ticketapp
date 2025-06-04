"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Created = exports.Forbidden = exports.Unauthorized = exports.NotFound = exports.BadRequest = exports.InternalServerError = exports.Ok = exports.httpSettings = void 0;
exports.httpSettings = {
    messages: {
        OK: 'ok',
        INTERNAL_SERVER_ERROR: 'Internal server error',
        BAD_REQUEST: 'Bad request',
        NOT_FOUND: 'Not found',
        UNAUTHORIZED: 'Unauthorized',
        FORBIDDEN: 'Forbidden',
        CREATED: 'Created',
    },
    statusCodes: {
        OK: 200,
        INTERNAL_SERVER_ERROR: 500,
        BARD_REQUEST: 400,
        NOT_FOUND: 404,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        CREATED: 201,
    },
};
const { messages, statusCodes } = exports.httpSettings;
const Ok = (res, data) => {
    return res.status(statusCodes.OK).json({
        status: statusCodes.OK,
        success: true,
        message: messages.OK,
        data,
    });
};
exports.Ok = Ok;
const InternalServerError = (res, error) => {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
        status: statusCodes.INTERNAL_SERVER_ERROR,
        success: false,
        message: messages.INTERNAL_SERVER_ERROR,
        error,
    });
};
exports.InternalServerError = InternalServerError;
const BadRequest = (res, error) => {
    return res.status(statusCodes.BARD_REQUEST).json({
        status: statusCodes.BARD_REQUEST,
        success: false,
        message: messages.BAD_REQUEST,
        error,
    });
};
exports.BadRequest = BadRequest;
const NotFound = (res, error) => {
    return res.status(statusCodes.NOT_FOUND).json({
        status: statusCodes.NOT_FOUND,
        success: false,
        message: messages.NOT_FOUND,
        error,
    });
};
exports.NotFound = NotFound;
const Unauthorized = (res, error) => {
    return res.status(statusCodes.UNAUTHORIZED).json({
        status: statusCodes.UNAUTHORIZED,
        success: false,
        message: messages.UNAUTHORIZED,
        error,
    });
};
exports.Unauthorized = Unauthorized;
const Forbidden = (res, error) => {
    return res.status(statusCodes.FORBIDDEN).json({
        status: statusCodes.FORBIDDEN,
        success: false,
        message: messages.FORBIDDEN,
        error,
    });
};
exports.Forbidden = Forbidden;
const Created = (res, data) => {
    return res.status(statusCodes.CREATED).json({
        status: statusCodes.CREATED,
        success: true,
        message: messages.CREATED,
        data,
    });
};
exports.Created = Created;
//# sourceMappingURL=responses.js.map