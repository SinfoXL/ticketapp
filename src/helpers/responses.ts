import { Response } from 'express';
import { httpSettings } from '../config/http-settings';

const { messages, statusCodes } = httpSettings;

export const Ok = (res: Response, data: any) => {
    return res.status(statusCodes.OK).json({
        status: statusCodes.OK,
        success: true,
        message: messages.OK,
        data,
    });
};

export const InternalServerError = (res: Response, error: string) => {
    return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
        status: statusCodes.INTERNAL_SERVER_ERROR,
        success: false,
        message: messages.INTERNAL_SERVER_ERROR,
        error,
    });
};

export const BadRequest = (res: Response, error: string) => {
    return res.status(statusCodes.BARD_REQUEST).json({
        status: statusCodes.BARD_REQUEST,
        success: false,
        message: messages.BAD_REQUEST,
        error,
    });
};

export const NotFound = (res: Response, error: string) => {
    return res.status(statusCodes.NOT_FOUND).json({
        status: statusCodes.NOT_FOUND,
        success: false,
        message: messages.NOT_FOUND,
        error,
    });
};

export const Unauthorized = (res: Response, error: string) => {
    return res.status(statusCodes.UNAUTHORIZED).json({
        status: statusCodes.UNAUTHORIZED,
        success: false,
        message: messages.UNAUTHORIZED,
        error,
    });
};
export const Forbidden = (res: Response, error: string) => {
    return res.status(statusCodes.FORBIDDEN).json({
        status: statusCodes.FORBIDDEN,
        success: false,
        message: messages.FORBIDDEN,
        error,
    });
};
export const Created = (res: Response, data: any) => {
    return res.status(statusCodes.CREATED).json({
        status: statusCodes.CREATED,
        success: true,
        message: messages.CREATED,
        data,
    });
};
