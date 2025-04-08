import { TicketPriorityDataAccess } from './data-access';
import { TicketPriority, TicketPriorityQueryRequest } from './def.types';

export class TicketPriorityServices {
    private dataAccess: TicketPriorityDataAccess;

    constructor() {
        this.dataAccess = new TicketPriorityDataAccess();
    }

    getTicketPriorities = async ({ filters, pagination }: TicketPriorityQueryRequest): Promise<TicketPriority[]> => {
        return await this.dataAccess.getTicketPriorities(filters, pagination);
    };

    saveTicketPriorities = async (priorities: TicketPriority[]): Promise<TicketPriority[]> => {
        return await this.dataAccess.saveTicketPriorities(priorities);
    };

    updateTicketPriority = async (id: number, data: Partial<TicketPriority>): Promise<TicketPriority> => {
        return await this.dataAccess.updateTicketPriority(id, data);
    };

    deleteTicketPriority = async (id: number): Promise<void> => {
        return await this.dataAccess.deleteTicketPriority(id);
    };
}
