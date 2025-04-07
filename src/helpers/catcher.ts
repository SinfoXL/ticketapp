import { NextFunction, Request, Response } from 'express';
import { InternalServerError } from './responses';

interface FunctionWrapped {
    (req: any, res: any, next: any): Promise<void>;
}

export const catcher = (functionWrapped: FunctionWrapped) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await functionWrapped(req, res, next);
        } catch (error: any) {
            console.error('Error:', error);
            InternalServerError(res, error.message);
        }
    };
};
