import { RolesDataAccess } from './data-access';
import { Role, RoleQueryRequest } from './def.types';

export class RolesServices {
    private dataAccess: RolesDataAccess;

    constructor() {
        this.dataAccess = new RolesDataAccess();
    }

    // Example method
    getRoles = async ({filters, pagination}: RoleQueryRequest): Promise<Role[]> => {
        return await this.dataAccess.getRoles(filters, pagination);
    };

    saveRoles = async (roles: Role[]): Promise<Role[]> => {
        return await this.dataAccess.saveRoles(roles);
    };

    updateRoles = async (id: string, name: string): Promise<Role> => {
        return await this.dataAccess.updateRoles(id, name);
    };

    deleteRoles = async (id: string): Promise<void> => {
        return await this.dataAccess.deleteRoles(id);
    };
}
