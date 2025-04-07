export interface Ticket {
    id: string;
    title: string;
    description: string;
    statusId: number;
    priorityId: number;
    categoryId: number;
    createdById: string;
    assignedToId?: string | null;
    companyId?: string | null;
    projectId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface TicketQueryRequest {
    filters?: Partial<Pick<Ticket, 'id' | 'title' | 'statusId' | 'priorityId' | 'categoryId'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
