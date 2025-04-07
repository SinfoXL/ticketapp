import dotenv from 'dotenv';

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
        port: Number(process.env.SERVER_PORT) || 3000,
        enviroment: process.env.NODE_ENV ?? 'development',
        host: process.env.SERVER_HOST ?? 'localhost',
        cors: {
            origin: process.env.CORS_ORIGIN ?? '*',
            // methods: process.env.CORS_METHODS ?? 'GET,HEAD,PUT,PATCH,POST,DELETE',
            // allowedHeaders: process.env.CORS_ALLOWED_HEADERS ?? 'Content-Type,Authorization',
            // exposedHeaders: process.env.CORS_EXPOSED_HEADERS ?? 'Content-Type,Authorization',
            // credentials: process.env.CORS_CREDENTIALS === 'true',
            // maxAge: Number(process.env.CORS_MAX_AGE) || 86400,
        },
        database: {
            // engine: process.env.DB_ENGINE ?? 'postgres',
            // database: process.env.DB_NAME ?? 'mydatabase',
            // host: process.env.DB_HOST ?? 'localhost',
            // port: Number(process.env.DB_PORT) || 5432,
            // username: process.env.DB_USERNAME!,
            // password: process.env.DB_PASSWORD!,
        },
    },
};
