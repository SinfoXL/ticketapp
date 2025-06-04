import { NextFunction, Request, Response } from 'express';
interface FunctionWrapped {
    (req: any, res: any, next: any): Promise<void>;
}
export declare const catcher: (functionWrapped: FunctionWrapped) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
