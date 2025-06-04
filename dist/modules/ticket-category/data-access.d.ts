import { TicketCategoryQueryRequest, TicketCategory } from './def.types';
export declare class TicketCategoryDataAccess {
    private db;
    constructor();
    getTicketCategories: (filters?: TicketCategoryQueryRequest["filters"], pagination?: TicketCategoryQueryRequest["pagination"]) => Promise<TicketCategory[]>;
    saveTicketCategories: (categories: TicketCategory[]) => Promise<TicketCategory[]>;
    updateTicketCategory: (id: number, data: Partial<TicketCategory>) => Promise<TicketCategory>;
    deleteTicketCategory: (id: number) => Promise<void>;
}
