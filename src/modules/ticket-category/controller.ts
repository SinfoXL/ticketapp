import { Request, Response } from 'express';
import { TicketCategory } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { TicketCategoryServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class TicketCategoryController {
    private service: TicketCategoryServices;

    constructor() {
        this.service = new TicketCategoryServices();
    }

    getTicketCategories = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'name']);
        const categories = await this.service.getTicketCategories({ filters, pagination });

        if (!categories) NotFound(res, 'Ticket categories not found');
        Ok(res, categories);
    };

    saveTicketCategories = async (req: Request, res: Response): Promise<void> => {
        const body: TicketCategory[] = req.body;
        const categoriesSaved = await this.service.saveTicketCategories(body);
        Created(res, categoriesSaved);
    };

    updateTicketCategory = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<TicketCategory> = req.body;
        const id = parseInt(req.params.id, 10);

        const categoryUpdated = await this.service.updateTicketCategory(id, data);

        if (!categoryUpdated) NotFound(res, 'Ticket category not found');
        Ok(res, categoryUpdated);
    };

    deleteTicketCategory = async (req: Request, res: Response): Promise<void> => {
        const id = parseInt(req.params.id, 10);
        await this.service.deleteTicketCategory(id);
        Ok(res, id);
    };
}
