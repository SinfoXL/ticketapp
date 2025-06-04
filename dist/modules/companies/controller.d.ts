import { Request, Response } from 'express';
export declare class CompaniesController {
    private service;
    constructor();
    getCompanies: (req: Request, res: Response) => Promise<void>;
    saveCompanies: (req: Request, res: Response) => Promise<void>;
    updateCompany: (req: Request, res: Response) => Promise<void>;
    deleteCompany: (req: Request, res: Response) => Promise<void>;
}
