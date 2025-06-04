import { TicketQueryRequest, Ticket } from './def.types';
export declare class TicketsDataAccess {
    private db;
    constructor();
    getTickets: (filters?: TicketQueryRequest["filters"], pagination?: TicketQueryRequest["pagination"]) => Promise<Ticket[]>;
    saveTickets: (tickets: Ticket[]) => Promise<Ticket[]>;
    updateTicket: (id: string, data: Partial<Ticket>) => Promise<Ticket>;
    deleteTicket: (id: string) => Promise<void>;
}
