import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../helpers/jwt-generator';
import { Forbidden, Unauthorized } from '../helpers/responses';

function getTokenFromRequest(req: Request): string | null {
    const authHeader = req.headers['authorization'];
    if (authHeader?.startsWith('Bearer ')) {
        return authHeader.split(' ')[1];
    }
    if (req.cookies?.accessToken) {
        return req.cookies.accessToken;
    }
    return null;
}

// Función de segundo orden que recibe permisos requeridos
export const authorize = (requiredRoles: string[] = []) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = getTokenFromRequest(req);

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

        req.user = {
            id: tokenValidated.id,
        };

        next();
    };
};
