import { Request, Response } from 'express';
import { TicketPriority } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { TicketPriorityServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class TicketPriorityController {
    private service: TicketPriorityServices;

    constructor() {
        this.service = new TicketPriorityServices();
    }

    getTicketPriorities = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'name']);
        const priorities = await this.service.getTicketPriorities({ filters, pagination });

        if (!priorities) NotFound(res, 'Ticket priorities not found');
        Ok(res, priorities);
    };

    saveTicketPriorities = async (req: Request, res: Response): Promise<void> => {
        const body: TicketPriority[] = req.body;
        const prioritiesSaved = await this.service.saveTicketPriorities(body);
        Created(res, prioritiesSaved);
    };

    updateTicketPriority = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<TicketPriority> = req.body;
        const id = parseInt(req.params.id, 10);

        const priorityUpdated = await this.service.updateTicketPriority(id, data);

        if (!priorityUpdated) NotFound(res, 'Ticket priority not found');
        Ok(res, priorityUpdated);
    };

    deleteTicketPriority = async (req: Request, res: Response): Promise<void> => {
        const id = parseInt(req.params.id, 10);
        await this.service.deleteTicketPriority(id);
        Ok(res, id);
    };
}
