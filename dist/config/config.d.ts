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
    };
}
interface DatabaseConfig {
}
interface Config {
    server: ServerConfig;
    database: DatabaseConfig;
    jwt: JwtConfig;
}
export declare const config: Config;
export {};
