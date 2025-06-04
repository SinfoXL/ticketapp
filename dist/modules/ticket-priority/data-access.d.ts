import { TicketPriorityQueryRequest, TicketPriority } from './def.types';
export declare class TicketPriorityDataAccess {
    private db;
    constructor();
    getTicketPriorities: (filters?: TicketPriorityQueryRequest["filters"], pagination?: TicketPriorityQueryRequest["pagination"]) => Promise<TicketPriority[]>;
    saveTicketPriorities: (priorities: TicketPriority[]) => Promise<TicketPriority[]>;
    updateTicketPriority: (id: number, data: Partial<TicketPriority>) => Promise<TicketPriority>;
    deleteTicketPriority: (id: number) => Promise<void>;
}
