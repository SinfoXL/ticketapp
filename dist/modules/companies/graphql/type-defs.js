"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyTypeDefs = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.companyTypeDefs = (0, graphql_tag_1.default) `
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
//# sourceMappingURL=type-defs.js.map