// These are utility functions for generating JWTs (JSON Web Tokens) for auth purposes.

import jwt, { SignOptions } from 'jsonwebtoken';
import { config } from '../config/config';

/**
 * Generates a JWT token for authentication.
 * @param {Object} payload - The payload to include in the token.
 * @returns {string} The generated JWT token.
 */

export const generateAccessToken = (payload: object): string => {
    const options: SignOptions = {
        expiresIn: config.jwt.accessToken.expiresIn as any,
        algorithm: config.jwt.accessToken.algorithm as SignOptions['algorithm'],
    };
    return jwt.sign(payload, config.jwt.accessToken.secret, options);
};

export const generateRefreshToken = (payload: object): string => {
    const options: SignOptions = {
        expiresIn: config.jwt.refreshToken.expiresIn as any,
        algorithm: config.jwt.refreshToken.algorithm as SignOptions['algorithm'],
    };
    return jwt.sign(payload, config.jwt.refreshToken.secret, options);
};

/**
 * Verifies a JWT token and returns the decoded payload.
 * @param {string} token - The JWT token to verify.
 * @returns {Object} The decoded payload if the token is valid, otherwise null.
 */
export const verifyToken = (token: string): object | null => {
    try {
        const decoded = jwt.verify(token, config.jwt.accessToken.secret);
        return decoded as object;
    } catch (error) {
        return null;
    }
};
