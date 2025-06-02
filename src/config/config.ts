import dotenv from 'dotenv';
const { env } = process;

dotenv.config();

interface JwtTokenConfig {
    secret: string;
    expiresIn: string | number;
    algorithm: string;
}

interface JwtConfig {
    accessToken: JwtTokenConfig;
    refreshToken: JwtTokenConfig;
}

interface ServerConfig {
    port: number;
    enviroment: string;
    host: string;
    cors: {
        origin: string;
        // methods?: string;
        // allowedHeaders?: string;
        // exposedHeaders?: string;
        // credentials?: boolean;
        // maxAge?: number;
    };
}

interface DatabaseConfig {
    // engine?: string;
    // database?: string;
    // host?: string;
    // port?: number;
    // username?: string;
    // password?: string;
}

interface Config {
    server: ServerConfig;
    database: DatabaseConfig;
    jwt: JwtConfig;
}

export const config: Config = {
    server: {
        port: Number(env.SERVER_PORT) || 3000,
        enviroment: env.NODE_ENV ?? 'development',
        host: env.SERVER_HOST ?? 'localhost',
        cors: {
            origin: env.CORS_ORIGIN ?? '*',
            // methods: env.CORS_METHODS ?? 'GET,HEAD,PUT,PATCH,POST,DELETE',
            // allowedHeaders: env.CORS_ALLOWED_HEADERS ?? 'Content-Type,Authorization',
            // exposedHeaders: env.CORS_EXPOSED_HEADERS ?? 'Content-Type,Authorization',
            // credentials: env.CORS_CREDENTIALS === 'true',
            // maxAge: Number(env.CORS_MAX_AGE) || 86400,
        },
    },
    database: {
        // engine: env.DB_ENGINE ?? 'postgres',
        // database: env.DB_NAME ?? 'mydatabase',
        // host: env.DB_HOST ?? 'localhost',
        // port: Number(env.DB_PORT) || 5432,
        // username: env.DB_USERNAME!,
        // password: env.DB_PASSWORD!,
    },
    jwt: {
        accessToken: {
            secret: env.JWT_ACCESS_SECRET ?? 'defaultsecret',
            expiresIn: env.JWT_ACCESS_EXPIRES_IN ?? '12h',
            algorithm: env.JWT_ACCESS_ALGORITHM ?? 'HS256',
        },
        refreshToken: {
            secret: env.JWT_REFRESH_SECRET ?? 'defaultrefreshsecret',
            expiresIn: env.JWT_REFRESH_EXPIRES_IN ?? '30d',
            algorithm: env.JWT_REFRESH_ALGORITHM ?? 'HS256',
        },
    },
};
