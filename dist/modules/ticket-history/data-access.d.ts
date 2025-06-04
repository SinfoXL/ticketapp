import { TicketHistoryQueryRequest, TicketHistory } from './def.types';
export declare class TicketHistoryDataAccess {
    private db;
    constructor();
    getTicketHistories: (filters?: TicketHistoryQueryRequest["filters"], pagination?: TicketHistoryQueryRequest["pagination"]) => Promise<TicketHistory[]>;
    saveTicketHistories: (histories: TicketHistory[]) => Promise<TicketHistory[]>;
    updateTicketHistory: (id: string, data: Partial<TicketHistory>) => Promise<TicketHistory>;
    deleteTicketHistory: (id: string) => Promise<void>;
}
