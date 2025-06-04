"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.roleTypeDefs = (0, graphql_tag_1.gql) `
    type Role {
        id: ID!
        name: String!
    }

    input RoleFilterInput {
        id: String
        name: String
    }

    input PaginationInput {
        page: Int
        limit: Int
    }

    input RoleInput {
        id: ID
        name: String!
    }

    type Query {
        getRoles(filters: RoleFilterInput, pagination: PaginationInput): [Role!]!
    }

    type Mutation {
        saveRoles(roles: [RoleInput!]!): [Role!]!
        updateRole(id: ID!, data: RoleInput!): Role!
        deleteRole(id: ID!): Boolean
    }
`;
//# sourceMappingURL=type-defs.js.map