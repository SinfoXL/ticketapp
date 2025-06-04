import { Role, RoleQueryRequest } from './def.types';
export declare class RolesServices {
    private dataAccess;
    constructor();
    getRoles: ({ filters, pagination }: RoleQueryRequest) => Promise<Role[]>;
    saveRoles: (roles: Role[]) => Promise<Role[]>;
    updateRole: (id: string, name: string) => Promise<Role>;
    deleteRole: (id: string) => Promise<void>;
}
