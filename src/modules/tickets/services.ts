import { TicketsDataAccess } from './data-access';
import { Ticket, TicketQueryRequest } from './def.types';

export class TicketsServices {
    private dataAccess: TicketsDataAccess;

    constructor() {
        this.dataAccess = new TicketsDataAccess();
    }

    getTickets = async (query: TicketQueryRequest): Promise<Ticket[]> => {
        const { filters, pagination } = query;
        return await this.dataAccess.getTickets(filters, pagination);
    };

    saveTickets = async (tickets: Ticket[]): Promise<Ticket[]> => {
        return await this.dataAccess.saveTickets(tickets);
    };

    updateTicket = async (id: string, data: Partial<Ticket>): Promise<Ticket> => {
        return await this.dataAccess.updateTicket(id, data);
    };

    deleteTicket = async (id: string): Promise<void> => {
        return await this.dataAccess.deleteTicket(id);
    };
}
