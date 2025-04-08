import { Database } from '../../database/instance';
import { RoleQueryRequest, Role } from './def.types';
import { buildWhereClause } from '../../helpers/where-clause';

export class RolesDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getRoles = async (filters: RoleQueryRequest['filters'] = {}, pagination: RoleQueryRequest['pagination'] = {}): Promise<Role[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.role.findMany({
            where: buildWhereClause<Role>(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveRoles = async (roles: Role[]): Promise<Role[]> => {
        const rolesSaved = await this.db.role.createManyAndReturn({
            data: roles,
            skipDuplicates: true, // is not supported when using MongoDB, SQLServer, or SQLite.
        });
        return rolesSaved;
    };

    updateRole = async (id: string, name: string): Promise<Role> => {
        const rolesUpdated = await this.db.role.update({
            where: { id },
            data: name,
        });
        return rolesUpdated;
    };

    deleteRole = async (id: string): Promise<void> => {
        await this.db.role.delete({
            where: { id },
        });
        return;
    };
}
