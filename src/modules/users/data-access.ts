import { Database } from '../../database/instance';
import { UserQueryRequest, User } from './def.types';
import { buildWhereClause } from '../../helpers/buildWhereClause';

export class UsersDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getUsers = async (filters: UserQueryRequest['filters'] = {}, pagination: UserQueryRequest['pagination'] = {}): Promise<User[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.user.findMany({
            where: buildWhereClause<User>(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveUsers = async (users: User[]): Promise<User[]> => {
        return await this.db.user.createManyAndReturn({
            data: users,
            skipDuplicates: true,
        });
    };

    updateUser = async (id: string, data: Partial<User>): Promise<User> => {
        return await this.db.user.update({
            where: { id },
            data,
        });
    };

    deleteUser = async (id: string): Promise<void> => {
        await this.db.user.delete({
            where: { id },
        });
        return;
    };
}
