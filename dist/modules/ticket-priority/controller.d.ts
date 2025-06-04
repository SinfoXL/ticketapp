import { Request, Response } from 'express';
export declare class TicketPriorityController {
    private service;
    constructor();
    getTicketPriorities: (req: Request, res: Response) => Promise<void>;
    saveTicketPriorities: (req: Request, res: Response) => Promise<void>;
    updateTicketPriority: (req: Request, res: Response) => Promise<void>;
    deleteTicketPriority: (req: Request, res: Response) => Promise<void>;
}
