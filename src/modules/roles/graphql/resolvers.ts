import { Role } from '../def.types';
import { RolesServices } from '../services';

const services = new RolesServices();

export const roleResolvers = {
    Query: {
        getRoles: async (_: any, args: any) => {
            return services.getRoles({
                filters: args.filters,
                pagination: args.pagination,
            });
        },
    },
    Mutation: {
        saveRoles: async (_: any, args: { roles: Role[] }) => {
            return services.saveRoles(args.roles);
        },
        updateRole: async (_: any, args: any) => {
            return services.updateRole(args.id, args.data.name);
        },
        deleteRole: async (_: any, args: any) => {
            await services.deleteRole(args.id);
            return true;
        },
    },
};
