import { Database } from '../../database/instance';
import { UserQueryRequest, User } from './def.types';

export class UsersDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    private buildWhereClause(filters: UserQueryRequest['filters'] = {}): Partial<User> {
        const whereClause: Partial<User> = {};
        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined) {
                whereClause[key as keyof User] = value;
            }
        });
        return whereClause;
    }

    getUsers = async (filters: UserQueryRequest['filters'], pagination: UserQueryRequest['pagination']): Promise<User[]> => {
        const page = pagination?.page || 1;
        const limit = pagination?.limit || 10;

        return await this.db.user.findMany({
            where: this.buildWhereClause(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveUsers = async (users: User[]): Promise<User[]> => {
        const usersSaved = await this.db.user.createManyAndReturn({
            data: users,
            skipDuplicates: true,
        });
        return usersSaved;
    };

    updateUser = async (id: string, data: Partial<User>): Promise<User> => {
        const userUpdated = await this.db.user.update({
            where: { id },
            data,
        });
        return userUpdated;
    };

    deleteUser = async (id: string): Promise<void> => {
        await this.db.user.delete({
            where: { id },
        });
        return;
    };
}
