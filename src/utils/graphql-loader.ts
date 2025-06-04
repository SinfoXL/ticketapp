import type { IResolvers } from '@graphql-tools/utils';

import { mergeTypeDefs } from '@graphql-tools/merge';
import { mergeResolvers } from '@graphql-tools/merge';

import { userResolvers, userTypeDefs } from '../modules/users/graphql';
import { projectResolvers, projectTypeDefs } from '../modules/projects/graphql';
import { companyTypeDefs, companyResolvers } from '../modules/companies/graphql';
import { ticketTypeDefs, ticketResolvers } from '../modules/tickets/graphql';
import { roleTypeDefs, roleResolvers } from '../modules/roles/graphql';

// Fusiona los typeDefs y resolvers
export const typeDefs = mergeTypeDefs([userTypeDefs, companyTypeDefs, ticketTypeDefs, roleTypeDefs, projectTypeDefs]);
export const resolvers: IResolvers = mergeResolvers([userResolvers, companyResolvers, ticketResolvers, roleResolvers, projectResolvers]);
