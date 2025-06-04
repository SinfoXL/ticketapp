"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const jwt_generator_1 = require("../helpers/jwt-generator");
const responses_1 = require("../helpers/responses");
function getTokenFromRequest(req) {
    var _a;
    const authHeader = req.headers['authorization'];
    if (authHeader === null || authHeader === void 0 ? void 0 : authHeader.startsWith('Bearer ')) {
        return authHeader.split(' ')[1];
    }
    if ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.accessToken) {
        return req.cookies.accessToken;
    }
    return null;
}
const authorize = (requiredRoles = []) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = getTokenFromRequest(req);
        if (!token) {
            (0, responses_1.Unauthorized)(res, 'Acceso denegado');
            return;
        }
        const tokenValidated = (0, jwt_generator_1.verifyToken)(token);
        if (!tokenValidated) {
            (0, responses_1.Forbidden)(res, 'Acceso denegado');
            return;
        }
        if (!requiredRoles.includes(tokenValidated.role.name)) {
            (0, responses_1.Forbidden)(res, 'Acceso denegado');
            return;
        }
        req.user = {
            id: tokenValidated.id,
        };
        next();
    });
};
exports.authorize = authorize;
//# sourceMappingURL=authorize.js.map