import { Request, Response } from 'express';
export declare class TicketCommentController {
    private service;
    constructor();
    getTicketComments: (req: Request, res: Response) => Promise<void>;
    saveTicketComments: (req: Request, res: Response) => Promise<void>;
    updateTicketComment: (req: Request, res: Response) => Promise<void>;
    deleteTicketComment: (req: Request, res: Response) => Promise<void>;
}
