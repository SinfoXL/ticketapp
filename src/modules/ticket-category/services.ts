import { TicketCategoryDataAccess } from './data-access';
import { TicketCategory, TicketCategoryQueryRequest } from './def.types';

export class TicketCategoryServices {
    private dataAccess: TicketCategoryDataAccess;

    constructor() {
        this.dataAccess = new TicketCategoryDataAccess();
    }

    getTicketCategories = async ({ filters, pagination }: TicketCategoryQueryRequest): Promise<TicketCategory[]> => {
        return await this.dataAccess.getTicketCategories(filters, pagination);
    };

    saveTicketCategories = async (categories: TicketCategory[]): Promise<TicketCategory[]> => {
        return await this.dataAccess.saveTicketCategories(categories);
    };

    updateTicketCategory = async (id: number, data: Partial<TicketCategory>): Promise<TicketCategory> => {
        return await this.dataAccess.updateTicketCategory(id, data);
    };

    deleteTicketCategory = async (id: number): Promise<void> => {
        return await this.dataAccess.deleteTicketCategory(id);
    };
}
