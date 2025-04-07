import { TicketHistoryDataAccess } from './data-access';
import { TicketHistory, TicketHistoryQueryRequest } from './def.types';

export class TicketHistoryServices {
    private dataAccess: TicketHistoryDataAccess;

    constructor() {
        this.dataAccess = new TicketHistoryDataAccess();
    }

    getTicketHistories = async (query: TicketHistoryQueryRequest): Promise<TicketHistory[]> => {
        const { filters, pagination } = query;
        return await this.dataAccess.getTicketHistories(filters, pagination);
    };

    saveTicketHistories = async (histories: TicketHistory[]): Promise<TicketHistory[]> => {
        return await this.dataAccess.saveTicketHistories(histories);
    };

    updateTicketHistory = async (id: string, data: Partial<TicketHistory>): Promise<TicketHistory> => {
        return await this.dataAccess.updateTicketHistory(id, data);
    };

    deleteTicketHistory = async (id: string): Promise<void> => {
        return await this.dataAccess.deleteTicketHistory(id);
    };
}
