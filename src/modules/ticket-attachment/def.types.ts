export interface TicketAttachment {
    id: string;
    ticketId: string;
    filename: string;
    fileUrl: string;
    uploadedById: string;
    uploadedAt: Date;
}

export interface TicketAttachmentQueryRequest {
    filters?: Partial<Pick<TicketAttachment, 'id' | 'ticketId' | 'uploadedById'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
