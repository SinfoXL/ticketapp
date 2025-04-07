import { Request, Response } from 'express';
import { TicketAttachment } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { TicketAttachmentServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class TicketAttachmentController {
    private service: TicketAttachmentServices;

    constructor() {
        this.service = new TicketAttachmentServices();
    }

    getTicketAttachments = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'ticketId', 'uploadedById']);
        const attachments = await this.service.getTicketAttachments({ filters, pagination });

        if (!attachments) NotFound(res, 'Ticket attachments not found');
        Ok(res, attachments);
    };

    saveTicketAttachments = async (req: Request, res: Response): Promise<void> => {
        const body: TicketAttachment[] = req.body;
        const attachmentsSaved = await this.service.saveTicketAttachments(body);
        Created(res, attachmentsSaved);
    };

    updateTicketAttachment = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<TicketAttachment> = req.body;
        const id = req.params.id;

        const attachmentUpdated = await this.service.updateTicketAttachment(id, data);

        if (!attachmentUpdated) NotFound(res, 'Ticket attachment not found');
        Ok(res, attachmentUpdated);
    };

    deleteTicketAttachment = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await this.service.deleteTicketAttachment(id);
        Ok(res, id);
    };
}
