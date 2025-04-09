import dotenv from 'dotenv';
const { env } = process;

dotenv.config();

interface Config {
    server: {
        port: number;
        enviroment: string;
        host: string;
        cors: {
            origin: string;
            // Descomenta y tipa estas propiedades si las necesitas
            // methods?: string;
            // allowedHeaders?: string;
            // exposedHeaders?: string;
            // credentials?: boolean;
            // maxAge?: number;
        };
        database: {
            // engine: string;
            // database: string;
            // host: string;
            // port: number;
            // username: string;
            // password: string;
        };
    };
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
        database: {
            // engine: env.DB_ENGINE ?? 'postgres',
            // database: env.DB_NAME ?? 'mydatabase',
            // host: env.DB_HOST ?? 'localhost',
            // port: Number(env.DB_PORT) || 5432,
            // username: env.DB_USERNAME!,
            // password: env.DB_PASSWORD!,
        },
    },
};
