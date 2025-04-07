import { Request, Response } from 'express';
import { TicketStatus } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { TicketStatusServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class TicketStatusController {
    private service: TicketStatusServices;

    constructor() {
        this.service = new TicketStatusServices();
    }

    getTicketStatuses = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'name']);
        const statuses = await this.service.getTicketStatuses({ filters, pagination });

        if (!statuses) NotFound(res, 'Ticket statuses not found');
        Ok(res, statuses);
    };

    saveTicketStatuses = async (req: Request, res: Response): Promise<void> => {
        const body: TicketStatus[] = req.body;
        const statusesSaved = await this.service.saveTicketStatuses(body);
        Created(res, statusesSaved);
    };

    updateTicketStatus = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<TicketStatus> = req.body;
        const id = parseInt(req.params.id, 10);

        const statusUpdated = await this.service.updateTicketStatus(id, data);

        if (!statusUpdated) NotFound(res, 'Ticket status not found');
        Ok(res, statusUpdated);
    };

    deleteTicketStatus = async (req: Request, res: Response): Promise<void> => {
        const id = parseInt(req.params.id, 10);
        await this.service.deleteTicketStatus(id);
        Ok(res, id);
    };
}
