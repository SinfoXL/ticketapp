import { TicketCommentQueryRequest, TicketComment } from './def.types';
export declare class TicketCommentDataAccess {
    private db;
    constructor();
    getTicketComments: (filters?: TicketCommentQueryRequest["filters"], pagination?: TicketCommentQueryRequest["pagination"]) => Promise<TicketComment[]>;
    saveTicketComments: (comments: TicketComment[]) => Promise<TicketComment[]>;
    updateTicketComment: (id: string, data: Partial<TicketComment>) => Promise<TicketComment>;
    deleteTicketComment: (id: string) => Promise<void>;
}
