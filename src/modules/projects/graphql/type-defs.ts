import gql from 'graphql-tag';

export const projectTypeDefs = gql`
    type Project {
        id: ID!
        name: String!
        description: String
        companyId: String!
        company: Company
        createdAt: String!
        updatedAt: String!
    }

    input ProjectInput {
        name: String!
        description: String
        companyId: String!
    }

    input ProjectFilterInput {
        id: String
        name: String
        companyId: String
    }

    input PaginationInput {
        page: Int
        limit: Int
    }

    type Query {
        getProjects(filters: ProjectFilterInput, pagination: PaginationInput): [Project!]!
    }

    type Mutation {
        createProject(data: ProjectInput!): Project!
        updateProject(id: ID!, data: ProjectInput!): Project!
        deleteProject(id: ID!): Boolean
    }
`;
