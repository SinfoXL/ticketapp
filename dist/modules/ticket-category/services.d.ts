import { TicketCategory, TicketCategoryQueryRequest } from './def.types';
export declare class TicketCategoryServices {
    private dataAccess;
    constructor();
    getTicketCategories: ({ filters, pagination }: TicketCategoryQueryRequest) => Promise<TicketCategory[]>;
    saveTicketCategories: (categories: TicketCategory[]) => Promise<TicketCategory[]>;
    updateTicketCategory: (id: number, data: Partial<TicketCategory>) => Promise<TicketCategory>;
    deleteTicketCategory: (id: number) => Promise<void>;
}
