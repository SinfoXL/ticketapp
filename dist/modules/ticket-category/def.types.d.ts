export interface TicketCategory {
    id: number;
    name: string;
}
export interface TicketCategoryQueryRequest {
    filters?: Partial<Pick<TicketCategory, 'id' | 'name'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
