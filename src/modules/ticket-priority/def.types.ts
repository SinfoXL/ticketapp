export interface TicketPriority {
    id: number;
    name: string;
}

export interface TicketPriorityQueryRequest {
    filters?: Partial<Pick<TicketPriority, 'id' | 'name'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
