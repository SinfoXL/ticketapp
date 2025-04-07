import { Database } from '../../database/instance';
import { RoleQueryRequest, Role } from './def.types';

export class RolesDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    private buildWhereClause(filters: RoleQueryRequest['filters'] = {}): Partial<Role> {
        const whereClause: Partial<Role> = {};
        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined) {
                whereClause[key as keyof Role] = value;
            }
        });
        return whereClause;
    }

    getRoles = async (filters: RoleQueryRequest['filters'], pagination: RoleQueryRequest['pagination']): Promise<Role[]> => {
        const page = pagination?.page || 1;
        const limit = pagination?.limit || 10;

        return await this.db.role.findMany({
            where: this.buildWhereClause(filters),
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

    updateRoles = async (id: string, name: string): Promise<Role> => {
        const rolesUpdated = await this.db.role.update({
            where: { id },
            data: name,
        });
        return rolesUpdated;
    };

    deleteRoles = async (id: string): Promise<void> => {
        await this.db.role.delete({
            where: {
                id,
            },
        });
        return;
    };
}
