import { Database } from '../../database/instance';
import { TicketCategoryQueryRequest, TicketCategory } from './def.types';
import { buildWhereClause } from '../../helpers/where-clause';

export class TicketCategoryDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getTicketCategories = async (filters: TicketCategoryQueryRequest['filters'] = {}, pagination: TicketCategoryQueryRequest['pagination'] = {}): Promise<TicketCategory[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.ticketCategory.findMany({
            where: buildWhereClause<TicketCategory>(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveTicketCategories = async (categories: TicketCategory[]): Promise<TicketCategory[]> => {
        return await this.db.ticketCategory.createManyAndReturn({
            data: categories,
            skipDuplicates: true,
        });
    };

    updateTicketCategory = async (id: number, data: Partial<TicketCategory>): Promise<TicketCategory> => {
        return await this.db.ticketCategory.update({
            where: { id },
            data,
        });
    };

    deleteTicketCategory = async (id: number): Promise<void> => {
        await this.db.ticketCategory.delete({
            where: { id },
        });
        return;
    };
}
