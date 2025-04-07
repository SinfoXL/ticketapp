import { Database } from '../../database/instance';
import { TicketHistoryQueryRequest, TicketHistory } from './def.types';
import { buildWhereClause } from '../../helpers/buildWhereClause';

export class TicketHistoryDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getTicketHistories = async (filters: TicketHistoryQueryRequest['filters'] = {}, pagination: TicketHistoryQueryRequest['pagination'] = {}): Promise<TicketHistory[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.ticketHistory.findMany({
            where: buildWhereClause<TicketHistory>(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveTicketHistories = async (histories: TicketHistory[]): Promise<TicketHistory[]> => {
        return await this.db.ticketHistory.createManyAndReturn({
            data: histories,
            skipDuplicates: true,
        });
    };

    updateTicketHistory = async (id: string, data: Partial<TicketHistory>): Promise<TicketHistory> => {
        return await this.db.ticketHistory.update({
            where: { id },
            data,
        });
    };

    deleteTicketHistory = async (id: string): Promise<void> => {
        await this.db.ticketHistory.delete({
            where: { id },
        });
        return;
    };
}
