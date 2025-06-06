import { Database } from '../../database/instance';
import { UserQueryRequest, User, UserRegisterRequest } from './def.types';
import { buildWhereClause } from '../../helpers/where-clause';

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
            include: {
                role: true,
                company: true,
            },
        });
    };

    saveUsers = async (users: User[]): Promise<User[]> => {
        return await this.db.user.createManyAndReturn({
            data: users,
            skipDuplicates: true,
        });
    };

    updateUser = async (id: string, data: any): Promise<User> => {
        return await this.db.user.update({
            where: { id },
            data,
        });
    };

    changeUserStatus = async (id: string): Promise<User | null> => {
        const user = await this.db.user.findUnique({
            where: { id },
        });

        if (!user) return null;

        return await this.db.user.update({
            where: { id },
            data: { active: !user.active },
        });
    };

    deleteUser = async (id: string): Promise<void> => {
        await this.db.user.delete({
            where: { id },
        });
        return;
    };

    registerUser = async (userData: UserRegisterRequest): Promise<User> => {
        const { name, email, password, companyId } = userData;
        return await this.db.user.create({
            data: {
                name,
                email,
                passwordHash: password,
                companyId: companyId || null,
                active: true,
                roleId: '0dd762fe-5529-4025-ac97-749674b6bccc',
            },
        });
    };

    getUserById = async (id: string): Promise<Partial<User> | null> => {
        return await this.db.user.findUnique({
            where: { id },
            include: {
                role: true,
            },
            omit: {
                passwordHash: true,
            },
        });
    };
}
