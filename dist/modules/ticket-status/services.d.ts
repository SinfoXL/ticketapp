import { TicketStatus, TicketStatusQueryRequest } from './def.types';
export declare class TicketStatusServices {
    private dataAccess;
    constructor();
    getTicketStatuses: ({ filters, pagination }: TicketStatusQueryRequest) => Promise<TicketStatus[]>;
    saveTicketStatuses: (statuses: TicketStatus[]) => Promise<TicketStatus[]>;
    updateTicketStatus: (id: number, data: Partial<TicketStatus>) => Promise<TicketStatus>;
    deleteTicketStatus: (id: number) => Promise<void>;
}
