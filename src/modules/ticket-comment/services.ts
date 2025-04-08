import { TicketCommentDataAccess } from './data-access';
import { TicketComment, TicketCommentQueryRequest } from './def.types';

export class TicketCommentServices {
    private dataAccess: TicketCommentDataAccess;

    constructor() {
        this.dataAccess = new TicketCommentDataAccess();
    }

    getTicketComments = async ({ filters, pagination }: TicketCommentQueryRequest): Promise<TicketComment[]> => {
        return await this.dataAccess.getTicketComments(filters, pagination);
    };

    saveTicketComments = async (comments: TicketComment[]): Promise<TicketComment[]> => {
        return await this.dataAccess.saveTicketComments(comments);
    };

    updateTicketComment = async (id: string, data: Partial<TicketComment>): Promise<TicketComment> => {
        return await this.dataAccess.updateTicketComment(id, data);
    };

    deleteTicketComment = async (id: string): Promise<void> => {
        return await this.dataAccess.deleteTicketComment(id);
    };
}
