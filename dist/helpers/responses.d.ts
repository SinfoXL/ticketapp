import { Response } from 'express';
export declare const httpSettings: {
    messages: {
        OK: string;
        INTERNAL_SERVER_ERROR: string;
        BAD_REQUEST: string;
        NOT_FOUND: string;
        UNAUTHORIZED: string;
        FORBIDDEN: string;
        CREATED: string;
    };
    statusCodes: {
        OK: number;
        INTERNAL_SERVER_ERROR: number;
        BARD_REQUEST: number;
        NOT_FOUND: number;
        UNAUTHORIZED: number;
        FORBIDDEN: number;
        CREATED: number;
    };
};
export declare const Ok: (res: Response, data: any) => Response<any, Record<string, any>>;
export declare const InternalServerError: (res: Response, error: string) => Response<any, Record<string, any>>;
export declare const BadRequest: (res: Response, error: string) => Response<any, Record<string, any>>;
export declare const NotFound: (res: Response, error: string) => Response<any, Record<string, any>>;
export declare const Unauthorized: (res: Response, error: string) => Response<any, Record<string, any>>;
export declare const Forbidden: (res: Response, error: string) => Response<any, Record<string, any>>;
export declare const Created: (res: Response, data: any) => Response<any, Record<string, any>>;
