import { Request, Response } from 'express';
export declare class TicketCategoryController {
    private service;
    constructor();
    getTicketCategories: (req: Request, res: Response) => Promise<void>;
    saveTicketCategories: (req: Request, res: Response) => Promise<void>;
    updateTicketCategory: (req: Request, res: Response) => Promise<void>;
    deleteTicketCategory: (req: Request, res: Response) => Promise<void>;
}
