"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const { env } = process;
dotenv_1.default.config();
exports.config = {
    server: {
        port: Number(env.SERVER_PORT) || 3000,
        enviroment: (_a = env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development',
        host: (_b = env.SERVER_HOST) !== null && _b !== void 0 ? _b : 'localhost',
        cors: {
            origin: (_c = env.CORS_ORIGIN) !== null && _c !== void 0 ? _c : '*',
        },
    },
    database: {},
    jwt: {
        accessToken: {
            secret: (_d = env.JWT_ACCESS_SECRET) !== null && _d !== void 0 ? _d : 'defaultsecret',
            expiresIn: (_e = env.JWT_ACCESS_EXPIRES_IN) !== null && _e !== void 0 ? _e : '12h',
            algorithm: (_f = env.JWT_ACCESS_ALGORITHM) !== null && _f !== void 0 ? _f : 'HS256',
        },
        refreshToken: {
            secret: (_g = env.JWT_REFRESH_SECRET) !== null && _g !== void 0 ? _g : 'defaultrefreshsecret',
            expiresIn: (_h = env.JWT_REFRESH_EXPIRES_IN) !== null && _h !== void 0 ? _h : '30d',
            algorithm: (_j = env.JWT_REFRESH_ALGORITHM) !== null && _j !== void 0 ? _j : 'HS256',
        },
    },
};
//# sourceMappingURL=config.js.map