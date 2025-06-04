export interface TicketHistory {
    id: string;
    ticketId: string;
    changedById: string;
    changeType: string;
    oldValue?: string | null;
    newValue?: string | null;
    createdAt: Date;
}
export interface TicketHistoryQueryRequest {
    filters?: Partial<Pick<TicketHistory, 'id' | 'ticketId' | 'changedById' | 'changeType'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
