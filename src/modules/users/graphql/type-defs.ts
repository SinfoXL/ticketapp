import { gql } from 'graphql-tag';

export const userTypeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        roleId: String!
        companyId: String
        active: Boolean!
        createdAt: String!
        updatedAt: String!
    }

    input UserFilterInput {
        id: String
        name: String
        email: String
        roleId: String
        companyId: String
        active: Boolean
    }

    input PaginationInput {
        page: Int
        limit: Int
    }

    input UserInput {
        id: ID
        name: String!
        email: String!
        passwordHash: String!
        roleId: String!
        companyId: String
        active: Boolean
    }

    type Query {
        getUsers(filters: UserFilterInput, pagination: PaginationInput): [User!]!
    }

    type Mutation {
        saveUsers(users: [UserInput!]!): [User!]!
        updateUser(id: ID!, data: UserInput!): User!
        deleteUser(id: ID!): Boolean
    }
`;
