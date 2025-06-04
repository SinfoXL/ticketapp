export declare const ticketResolvers: {
    Query: {
        getTickets: (_: any, args: any) => Promise<import("../def.types").Ticket[]>;
    };
    Mutation: {
        saveTickets: (_: any, args: any) => Promise<import("../def.types").Ticket[]>;
        updateTicket: (_: any, args: any) => Promise<import("../def.types").Ticket>;
        deleteTicket: (_: any, args: any) => Promise<boolean>;
    };
};
