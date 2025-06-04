import { TicketStatusQueryRequest, TicketStatus } from './def.types';
export declare class TicketStatusDataAccess {
    private db;
    constructor();
    getTicketStatuses: (filters?: TicketStatusQueryRequest["filters"], pagination?: TicketStatusQueryRequest["pagination"]) => Promise<TicketStatus[]>;
    saveTicketStatuses: (statuses: TicketStatus[]) => Promise<TicketStatus[]>;
    updateTicketStatus: (id: number, data: Partial<TicketStatus>) => Promise<TicketStatus>;
    deleteTicketStatus: (id: number) => Promise<void>;
}
