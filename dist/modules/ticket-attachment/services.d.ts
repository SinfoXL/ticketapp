import { TicketAttachment, TicketAttachmentQueryRequest } from './def.types';
export declare class TicketAttachmentServices {
    private dataAccess;
    constructor();
    getTicketAttachments: ({ filters, pagination }: TicketAttachmentQueryRequest) => Promise<TicketAttachment[]>;
    saveTicketAttachments: (attachments: TicketAttachment[]) => Promise<TicketAttachment[]>;
    updateTicketAttachment: (id: string, data: Partial<TicketAttachment>) => Promise<TicketAttachment>;
    deleteTicketAttachment: (id: string) => Promise<void>;
}
