import { TicketComment, TicketCommentQueryRequest } from './def.types';
export declare class TicketCommentServices {
    private dataAccess;
    constructor();
    getTicketComments: ({ filters, pagination }: TicketCommentQueryRequest) => Promise<TicketComment[]>;
    saveTicketComments: (comments: TicketComment[]) => Promise<TicketComment[]>;
    updateTicketComment: (id: string, data: Partial<TicketComment>) => Promise<TicketComment>;
    deleteTicketComment: (id: string) => Promise<void>;
}
