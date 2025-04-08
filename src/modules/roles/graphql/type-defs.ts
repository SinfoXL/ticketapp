import { gql } from 'graphql-tag';

export const roleTypeDefs = gql`
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
