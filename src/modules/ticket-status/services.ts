import { TicketStatusDataAccess } from './data-access';
import { TicketStatus, TicketStatusQueryRequest } from './def.types';

export class TicketStatusServices {
    private dataAccess: TicketStatusDataAccess;

    constructor() {
        this.dataAccess = new TicketStatusDataAccess();
    }

    getTicketStatuses = async (query: TicketStatusQueryRequest): Promise<TicketStatus[]> => {
        const { filters, pagination } = query;
        return await this.dataAccess.getTicketStatuses(filters, pagination);
    };

    saveTicketStatuses = async (statuses: TicketStatus[]): Promise<TicketStatus[]> => {
        return await this.dataAccess.saveTicketStatuses(statuses);
    };

    updateTicketStatus = async (id: number, data: Partial<TicketStatus>): Promise<TicketStatus> => {
        return await this.dataAccess.updateTicketStatus(id, data);
    };

    deleteTicketStatus = async (id: number): Promise<void> => {
        return await this.dataAccess.deleteTicketStatus(id);
    };
}
