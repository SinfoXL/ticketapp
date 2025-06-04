import { Request, Response } from 'express';
export declare class TicketHistoryController {
    private service;
    constructor();
    getTicketHistories: (req: Request, res: Response) => Promise<void>;
    saveTicketHistories: (req: Request, res: Response) => Promise<void>;
    updateTicketHistory: (req: Request, res: Response) => Promise<void>;
    deleteTicketHistory: (req: Request, res: Response) => Promise<void>;
}
