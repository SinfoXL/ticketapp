"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
const generateAccessToken = (payload) => {
    const options = {
        expiresIn: config_1.config.jwt.accessToken.expiresIn,
        algorithm: config_1.config.jwt.accessToken.algorithm,
    };
    return jsonwebtoken_1.default.sign(payload, config_1.config.jwt.accessToken.secret, options);
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (payload) => {
    const options = {
        expiresIn: config_1.config.jwt.refreshToken.expiresIn,
        algorithm: config_1.config.jwt.refreshToken.algorithm,
    };
    return jsonwebtoken_1.default.sign(payload, config_1.config.jwt.refreshToken.secret, options);
};
exports.generateRefreshToken = generateRefreshToken;
const verifyToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.config.jwt.accessToken.secret);
        return decoded;
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt-generator.js.map