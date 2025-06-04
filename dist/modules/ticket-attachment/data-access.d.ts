import { TicketAttachmentQueryRequest, TicketAttachment } from './def.types';
export declare class TicketAttachmentDataAccess {
    private db;
    constructor();
    getTicketAttachments: (filters?: TicketAttachmentQueryRequest["filters"], pagination?: TicketAttachmentQueryRequest["pagination"]) => Promise<TicketAttachment[]>;
    saveTicketAttachments: (attachments: TicketAttachment[]) => Promise<TicketAttachment[]>;
    updateTicketAttachment: (id: string, data: Partial<TicketAttachment>) => Promise<TicketAttachment>;
    deleteTicketAttachment: (id: string) => Promise<void>;
}
