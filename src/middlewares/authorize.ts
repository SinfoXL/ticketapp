import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../helpers/jwt-generator';
import { Forbidden, Unauthorized } from '../helpers/responses';

// Función de segundo orden que recibe permisos requeridos
export const authorize = (requiredRoles: string[] = []) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            Unauthorized(res, 'Acceso denegado');
            return;
        }

        const tokenValidated: any = verifyToken(token);

        if (!tokenValidated) {
            Forbidden(res, 'Acceso denegado');
            return;
        }

        if (!requiredRoles.includes(tokenValidated.role.name)) {
            Forbidden(res, 'Acceso denegado');
            return;
        }

        next();
    };
};
