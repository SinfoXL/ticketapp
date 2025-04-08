import { TicketsServices } from '../services';

const services = new TicketsServices();

export const ticketResolvers = {
    Query: {
        getTickets: async (_: any, args: any) => {
            return services.getTickets({
                filters: args.filters,
                pagination: args.pagination,
            });
        },
    },
    Mutation: {
        saveTickets: async (_: any, args: any) => {
            return services.saveTickets(args.tickets);
        },
        updateTicket: async (_: any, args: any) => {
            return services.updateTicket(args.id, args.data);
        },
        deleteTicket: async (_: any, args: any) => {
            await services.deleteTicket(args.id);
            return true;
        },
    },
};