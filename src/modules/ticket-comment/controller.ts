import { Request, Response } from 'express';
import { TicketComment } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { TicketCommentServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class TicketCommentController {
    private service: TicketCommentServices;

    constructor() {
        this.service = new TicketCommentServices();
    }

    getTicketComments = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'ticketId', 'userId']);
        const comments = await this.service.getTicketComments({ filters, pagination });

        if (!comments) NotFound(res, 'Ticket comments not found');
        Ok(res, comments);
    };

    saveTicketComments = async (req: Request, res: Response): Promise<void> => {
        const body: TicketComment[] = req.body;
        const commentsSaved = await this.service.saveTicketComments(body);
        Created(res, commentsSaved);
    };

    updateTicketComment = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<TicketComment> = req.body;
        const id = req.params.id;

        const commentUpdated = await this.service.updateTicketComment(id, data);

        if (!commentUpdated) NotFound(res, 'Ticket comment not found');
        Ok(res, commentUpdated);
    };

    deleteTicketComment = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await this.service.deleteTicketComment(id);
        Ok(res, id);
    };
}
