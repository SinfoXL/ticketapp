import { TicketAttachmentDataAccess } from './data-access';
import { TicketAttachment, TicketAttachmentQueryRequest } from './def.types';

export class TicketAttachmentServices {
    private dataAccess: TicketAttachmentDataAccess;

    constructor() {
        this.dataAccess = new TicketAttachmentDataAccess();
    }

    getTicketAttachments = async ({ filters, pagination }: TicketAttachmentQueryRequest): Promise<TicketAttachment[]> => {
        return await this.dataAccess.getTicketAttachments(filters, pagination);
    };

    saveTicketAttachments = async (attachments: TicketAttachment[]): Promise<TicketAttachment[]> => {
        return await this.dataAccess.saveTicketAttachments(attachments);
    };

    updateTicketAttachment = async (id: string, data: Partial<TicketAttachment>): Promise<TicketAttachment> => {
        return await this.dataAccess.updateTicketAttachment(id, data);
    };

    deleteTicketAttachment = async (id: string): Promise<void> => {
        return await this.dataAccess.deleteTicketAttachment(id);
    };
}
