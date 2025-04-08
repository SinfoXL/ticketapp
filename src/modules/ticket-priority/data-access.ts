import { Database } from '../../database/instance';
import { TicketPriorityQueryRequest, TicketPriority } from './def.types';
import { buildWhereClause } from '../../helpers/where-clause';

export class TicketPriorityDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getTicketPriorities = async (filters: TicketPriorityQueryRequest['filters'] = {}, pagination: TicketPriorityQueryRequest['pagination'] = {}): Promise<TicketPriority[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.ticketPriority.findMany({
            where: buildWhereClause<TicketPriority>(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveTicketPriorities = async (priorities: TicketPriority[]): Promise<TicketPriority[]> => {
        return await this.db.ticketPriority.createManyAndReturn({
            data: priorities,
            skipDuplicates: true,
        });
    };

    updateTicketPriority = async (id: number, data: Partial<TicketPriority>): Promise<TicketPriority> => {
        return await this.db.ticketPriority.update({
            where: { id },
            data,
        });
    };

    deleteTicketPriority = async (id: number): Promise<void> => {
        await this.db.ticketPriority.delete({
            where: { id },
        });
        return;
    };
}
