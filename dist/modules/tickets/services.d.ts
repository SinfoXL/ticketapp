import { Ticket, TicketQueryRequest } from './def.types';
export declare class TicketsServices {
    private dataAccess;
    constructor();
    getTickets: ({ filters, pagination }: TicketQueryRequest) => Promise<Ticket[]>;
    saveTickets: (tickets: Ticket[]) => Promise<Ticket[]>;
    updateTicket: (id: string, data: Partial<Ticket>) => Promise<Ticket>;
    deleteTicket: (id: string) => Promise<void>;
}
