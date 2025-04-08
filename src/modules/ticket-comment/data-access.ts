import { Database } from '../../database/instance';
import { TicketCommentQueryRequest, TicketComment } from './def.types';
import { buildWhereClause } from '../../helpers/where-clause';

export class TicketCommentDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getTicketComments = async (filters: TicketCommentQueryRequest['filters'] = {}, pagination: TicketCommentQueryRequest['pagination'] = {}): Promise<TicketComment[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.ticketComment.findMany({
            where: buildWhereClause<TicketComment>(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveTicketComments = async (comments: TicketComment[]): Promise<TicketComment[]> => {
        return await this.db.ticketComment.createManyAndReturn({
            data: comments,
            skipDuplicates: true,
        });
    };

    updateTicketComment = async (id: string, data: Partial<TicketComment>): Promise<TicketComment> => {
        return await this.db.ticketComment.update({
            where: { id },
            data,
        });
    };

    deleteTicketComment = async (id: string): Promise<void> => {
        await this.db.ticketComment.delete({
            where: { id },
        });
        return;
    };
}
