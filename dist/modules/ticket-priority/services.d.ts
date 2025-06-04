import { TicketPriority, TicketPriorityQueryRequest } from './def.types';
export declare class TicketPriorityServices {
    private dataAccess;
    constructor();
    getTicketPriorities: ({ filters, pagination }: TicketPriorityQueryRequest) => Promise<TicketPriority[]>;
    saveTicketPriorities: (priorities: TicketPriority[]) => Promise<TicketPriority[]>;
    updateTicketPriority: (id: number, data: Partial<TicketPriority>) => Promise<TicketPriority>;
    deleteTicketPriority: (id: number) => Promise<void>;
}
