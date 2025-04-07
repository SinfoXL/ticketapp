import { Request, Response } from 'express';
import { Ticket } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { TicketsServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class TicketsController {
    private service: TicketsServices;

    constructor() {
        this.service = new TicketsServices();
    }

    getTickets = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'title']);
        const tickets = await this.service.getTickets({ filters, pagination });

        if (!tickets) NotFound(res, 'Tickets not found');
        Ok(res, tickets);
    };

    saveTickets = async (req: Request, res: Response): Promise<void> => {
        const body: Ticket[] = req.body;
        const ticketsSaved = await this.service.saveTickets(body);
        Created(res, ticketsSaved);
    };

    updateTicket = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<Ticket> = req.body;
        const id = req.params.id;

        const ticketUpdated = await this.service.updateTicket(id, data);

        if (!ticketUpdated) NotFound(res, 'Ticket not found');
        Ok(res, ticketUpdated);
    };

    deleteTicket = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await this.service.deleteTicket(id);
        Ok(res, id);
    };
}
