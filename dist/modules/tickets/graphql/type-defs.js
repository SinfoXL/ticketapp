"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.ticketTypeDefs = (0, graphql_tag_1.gql) `
    type Ticket {
        id: ID!
        title: String!
        description: String
        statusId: Int!
        priorityId: Int!
        categoryId: Int!
        createdById: String!
        assignedToId: String
        companyId: String
        projectId: String
        createdAt: String!
        updatedAt: String!
    }

    input TicketFilterInput {
        id: String
        title: String
        statusId: Int
        priorityId: Int
        categoryId: Int
        createdById: String
        assignedToId: String
        companyId: String
        projectId: String
    }

    input PaginationInput {
        page: Int
        limit: Int
    }

    input TicketInput {
        id: ID
        title: String!
        description: String
        statusId: Int!
        priorityId: Int!
        categoryId: Int!
        createdById: String!
        assignedToId: String
        companyId: String
        projectId: String
    }

    type Query {
        getTickets(filters: TicketFilterInput, pagination: PaginationInput): [Ticket!]!
    }

    type Mutation {
        saveTickets(tickets: [TicketInput!]!): [Ticket!]!
        updateTicket(id: ID!, data: TicketInput!): Ticket!
        deleteTicket(id: ID!): Boolean
    }
`;
//# sourceMappingURL=type-defs.js.map