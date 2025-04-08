import gql from 'graphql-tag';

export const companyTypeDefs = gql`
    type Company {
        id: ID!
        name: String!
        parentId: String
        parent: Company
        subsidiaries: [Company!]!
        createdAt: String!
        updatedAt: String!
    }

    input CompanyInput {
        name: String!
        parentId: String
    }

    input CompanyFilterInput {
        id: String
        name: String
        parentId: String
    }

    input PaginationInput {
        page: Int
        limit: Int
    }

    type Query {
        getCompanies(filters: CompanyFilterInput, pagination: PaginationInput): [Company!]!
    }

    type Mutation {
        createCompany(data: CompanyInput!): Company!
        updateCompany(id: ID!, data: CompanyInput!): Company!
        deleteCompany(id: ID!): Boolean
    }
`;
