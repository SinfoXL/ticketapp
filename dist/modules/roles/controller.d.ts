import { Request, Response } from 'express';
export declare class RolesController {
    private service;
    constructor();
    getRoles: (req: Request, res: Response) => Promise<void>;
    saveRoles: (req: Request, res: Response) => Promise<void>;
    updateRoles: (req: Request, res: Response) => Promise<void>;
    deleteRoles: (req: Request, res: Response) => Promise<void>;
}
