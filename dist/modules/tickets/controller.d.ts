import { Request, Response } from 'express';
export declare class TicketsController {
    private service;
    constructor();
    getTickets: (req: Request, res: Response) => Promise<void>;
    saveTickets: (req: Request, res: Response) => Promise<void>;
    updateTicket: (req: Request, res: Response) => Promise<void>;
    deleteTicket: (req: Request, res: Response) => Promise<void>;
}
