"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const merge_1 = require("@graphql-tools/merge");
const merge_2 = require("@graphql-tools/merge");
const graphql_1 = require("../modules/users/graphql");
const graphql_2 = require("../modules/projects/graphql");
const graphql_3 = require("../modules/companies/graphql");
const graphql_4 = require("../modules/tickets/graphql");
const graphql_5 = require("../modules/roles/graphql");
exports.typeDefs = (0, merge_1.mergeTypeDefs)([graphql_1.userTypeDefs, graphql_3.companyTypeDefs, graphql_4.ticketTypeDefs, graphql_5.roleTypeDefs, graphql_2.projectTypeDefs]);
exports.resolvers = (0, merge_2.mergeResolvers)([graphql_1.userResolvers, graphql_3.companyResolvers, graphql_4.ticketResolvers, graphql_5.roleResolvers, graphql_2.projectResolvers]);
//# sourceMappingURL=graphql-loader.js.map