import { Database } from '../../database/instance';
import { TicketQueryRequest, Ticket } from './def.types';
import { buildWhereClause } from '../../helpers/buildWhereClause';

export class TicketsDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getTickets = async (filters: TicketQueryRequest['filters'] = {}, pagination: TicketQueryRequest['pagination'] = {}): Promise<Ticket[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.ticket.findMany({
            where: buildWhereClause<Ticket>(filters),
            take: limit,
            skip: (page - 1) * limit,
            include: {
                Project: true,
                assignedTo: true,
                createdBy: true,
                status: true,
                priority: true,
                attachments: true,
                category: true,
                comments: true,
                Company: true,
                historyLogs: true,
            },
        });
    };

    saveTickets = async (tickets: Ticket[]): Promise<Ticket[]> => {
        return await this.db.ticket.createManyAndReturn({
            data: tickets,
            skipDuplicates: true,
        });
    };

    updateTicket = async (id: string, data: Partial<Ticket>): Promise<Ticket> => {
        return await this.db.ticket.update({
            where: { id },
            data,
        });
    };

    deleteTicket = async (id: string): Promise<void> => {
        await this.db.ticket.delete({
            where: { id },
        });
        return;
    };
}
