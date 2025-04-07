import { Database } from '../../database/instance';
import { TicketStatusQueryRequest, TicketStatus } from './def.types';
import { buildWhereClause } from '../../helpers/buildWhereClause';

export class TicketStatusDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getTicketStatuses = async (filters: TicketStatusQueryRequest['filters'] = {}, pagination: TicketStatusQueryRequest['pagination'] = {}): Promise<TicketStatus[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.ticketStatus.findMany({
            where: buildWhereClause<TicketStatus>(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveTicketStatuses = async (statuses: TicketStatus[]): Promise<TicketStatus[]> => {
        return await this.db.ticketStatus.createManyAndReturn({
            data: statuses,
            skipDuplicates: true,
        });
    };

    updateTicketStatus = async (id: number, data: Partial<TicketStatus>): Promise<TicketStatus> => {
        return await this.db.ticketStatus.update({
            where: { id },
            data,
        });
    };

    deleteTicketStatus = async (id: number): Promise<void> => {
        await this.db.ticketStatus.delete({
            where: { id },
        });
        return;
    };
}
