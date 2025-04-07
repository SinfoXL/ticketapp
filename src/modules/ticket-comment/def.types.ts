export interface TicketComment {
    id: string;
    ticketId: string;
    userId: string;
    comment: string;
    createdAt: Date;
}

export interface TicketCommentQueryRequest {
    filters?: Partial<Pick<TicketComment, 'id' | 'ticketId' | 'userId'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
