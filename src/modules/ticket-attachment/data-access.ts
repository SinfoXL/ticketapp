import { Database } from '../../database/instance';
import { TicketAttachmentQueryRequest, TicketAttachment } from './def.types';
import { buildWhereClause } from '../../helpers/buildWhereClause';

export class TicketAttachmentDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getTicketAttachments = async (filters: TicketAttachmentQueryRequest['filters'] = {}, pagination: TicketAttachmentQueryRequest['pagination'] = {}): Promise<TicketAttachment[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.ticketAttachment.findMany({
            where: buildWhereClause<TicketAttachment>(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveTicketAttachments = async (attachments: TicketAttachment[]): Promise<TicketAttachment[]> => {
        return await this.db.ticketAttachment.createManyAndReturn({
            data: attachments,
            skipDuplicates: true,
        });
    };

    updateTicketAttachment = async (id: string, data: Partial<TicketAttachment>): Promise<TicketAttachment> => {
        return await this.db.ticketAttachment.update({
            where: { id },
            data,
        });
    };

    deleteTicketAttachment = async (id: string): Promise<void> => {
        await this.db.ticketAttachment.delete({
            where: { id },
        });
        return;
    };
}
