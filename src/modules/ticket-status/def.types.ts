export interface TicketStatus {
    id: number;
    name: string;
}

export interface TicketStatusQueryRequest {
    filters?: Partial<Pick<TicketStatus, 'id' | 'name'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
