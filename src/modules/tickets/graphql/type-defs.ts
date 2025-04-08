import { gql } from 'graphql-tag';

export const ticketTypeDefs = gql`
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
