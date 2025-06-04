import { Request, Response } from 'express';
export declare class TicketAttachmentController {
    private service;
    constructor();
    getTicketAttachments: (req: Request, res: Response) => Promise<void>;
    saveTicketAttachments: (req: Request, res: Response) => Promise<void>;
    updateTicketAttachment: (req: Request, res: Response) => Promise<void>;
    deleteTicketAttachment: (req: Request, res: Response) => Promise<void>;
}
