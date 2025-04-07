import { Request, Response } from 'express';
import { TicketHistory } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { TicketHistoryServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class TicketHistoryController {
    private service: TicketHistoryServices;

    constructor() {
        this.service = new TicketHistoryServices();
    }

    getTicketHistories = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'ticketId', 'changedById', 'changeType']);
        const histories = await this.service.getTicketHistories({ filters, pagination });

        if (!histories) NotFound(res, 'Ticket histories not found');
        Ok(res, histories);
    };

    saveTicketHistories = async (req: Request, res: Response): Promise<void> => {
        const body: TicketHistory[] = req.body;
        const historiesSaved = await this.service.saveTicketHistories(body);
        Created(res, historiesSaved);
    };

    updateTicketHistory = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<TicketHistory> = req.body;
        const id = req.params.id;

        const historyUpdated = await this.service.updateTicketHistory(id, data);

        if (!historyUpdated) NotFound(res, 'Ticket history not found');
        Ok(res, historyUpdated);
    };

    deleteTicketHistory = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await this.service.deleteTicketHistory(id);
        Ok(res, id);
    };
}
