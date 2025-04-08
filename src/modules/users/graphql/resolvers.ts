import { User } from '../def.types';
import { UsersServices } from '../services';

const services = new UsersServices();

export const userResolvers = {
    Query: {
        getUsers: async (_: any, args: any) => {
            return services.getUsers({
                filters: args.filters,
                pagination: args.pagination,
            });
        },
    },
    Mutation: {
        saveUsers: async (_: any, data: User[]) => {
            return services.saveUsers(data);
        },
        updateUser: async (_: any, args: any) => {
            return services.updateUser(args.id, args.data);
        },
        deleteUser: async (_: any, args: any) => {
            await services.deleteUser(args.id);
            return true;
        },
    },
};
