import { Role } from '../def.types';
export declare const roleResolvers: {
    Query: {
        getRoles: (_: any, args: any) => Promise<Role[]>;
    };
    Mutation: {
        saveRoles: (_: any, args: {
            roles: Role[];
        }) => Promise<Role[]>;
        updateRole: (_: any, args: any) => Promise<Role>;
        deleteRole: (_: any, args: any) => Promise<boolean>;
    };
};
