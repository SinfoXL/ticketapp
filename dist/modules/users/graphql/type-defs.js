"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.userTypeDefs = (0, graphql_tag_1.gql) `
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
//# sourceMappingURL=type-defs.js.map