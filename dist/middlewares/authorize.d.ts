import { NextFunction, Request, Response } from 'express';
export declare const authorize: (requiredRoles?: string[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
