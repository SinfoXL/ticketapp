import { RoleQueryRequest, Role } from './def.types';
export declare class RolesDataAccess {
    private db;
    constructor();
    getRoles: (filters?: RoleQueryRequest["filters"], pagination?: RoleQueryRequest["pagination"]) => Promise<Role[]>;
    saveRoles: (roles: Role[]) => Promise<Role[]>;
    updateRole: (id: string, name: string) => Promise<Role>;
    deleteRole: (id: string) => Promise<void>;
}
