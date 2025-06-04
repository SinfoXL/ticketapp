import { Request, Response } from 'express';
export declare class ProjectClientsController {
    private service;
    constructor();
    getProjectClients: (req: Request, res: Response) => Promise<void>;
    saveProjectClients: (req: Request, res: Response) => Promise<void>;
    updateProjectClient: (req: Request, res: Response) => Promise<void>;
    deleteProjectClient: (req: Request, res: Response) => Promise<void>;
}
