"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectTypeDefs = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.projectTypeDefs = (0, graphql_tag_1.default) `
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
//# sourceMappingURL=type-defs.js.map