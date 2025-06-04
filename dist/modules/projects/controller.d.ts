import { Request, Response } from 'express';
export declare class ProjectsController {
    private service;
    constructor();
    getProjects: (req: Request, res: Response) => Promise<void>;
    saveProjects: (req: Request, res: Response) => Promise<void>;
    updateProject: (req: Request, res: Response) => Promise<void>;
    deleteProject: (req: Request, res: Response) => Promise<void>;
}
