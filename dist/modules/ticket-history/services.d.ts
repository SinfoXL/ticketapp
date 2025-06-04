import { TicketHistory, TicketHistoryQueryRequest } from './def.types';
export declare class TicketHistoryServices {
    private dataAccess;
    constructor();
    getTicketHistories: ({ filters, pagination }: TicketHistoryQueryRequest) => Promise<TicketHistory[]>;
    saveTicketHistories: (histories: TicketHistory[]) => Promise<TicketHistory[]>;
    updateTicketHistory: (id: string, data: Partial<TicketHistory>) => Promise<TicketHistory>;
    deleteTicketHistory: (id: string) => Promise<void>;
}
