import { RolesDataAccess } from './data-access';
import { Role, RoleQueryRequest } from './def.types';
import { socketServer } from '../../server';

export class RolesServices {
    private dataAccess: RolesDataAccess;

    constructor() {
        this.dataAccess = new RolesDataAccess();
    }

    // Example method
    getRoles = async ({ filters, pagination }: RoleQueryRequest): Promise<Role[]> => {
        socketServer.emitToAll('roles', 'getRoles');
        return await this.dataAccess.getRoles(filters, pagination);
    };

    saveRoles = async (roles: Role[]): Promise<Role[]> => {
        socketServer.emitToAll('roles', 'saveRoles');
        return await this.dataAccess.saveRoles(roles);
    };

    updateRole = async (id: string, name: string): Promise<Role> => {
        socketServer.emitToAll('roles', `updateRole-${id}`);
        return await this.dataAccess.updateRole(id, name);
    };

    deleteRole = async (id: string): Promise<void> => {
        socketServer.emitToAll('roles', `deleteRole-${id}`);
        return await this.dataAccess.deleteRole(id);
    };
}
