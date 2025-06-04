import { Request, Response } from 'express';
export declare class TicketStatusController {
    private service;
    constructor();
    getTicketStatuses: (req: Request, res: Response) => Promise<void>;
    saveTicketStatuses: (req: Request, res: Response) => Promise<void>;
    updateTicketStatus: (req: Request, res: Response) => Promise<void>;
    deleteTicketStatus: (req: Request, res: Response) => Promise<void>;
}
