import { UsersDataAccess } from './data-access';
import { User, UserQueryRequest } from './def.types';

export class UsersServices {
    private dataAccess: UsersDataAccess;

    constructor() {
        this.dataAccess = new UsersDataAccess();
    }

    getUsers = async (query: UserQueryRequest): Promise<User[]> => {
        const { filters, pagination } = query;
        return await this.dataAccess.getUsers(filters, pagination);
    };

    saveUsers = async (users: User[]): Promise<User[]> => {
        return await this.dataAccess.saveUsers(users);
    };

    updateUser = async (id: string, data: Partial<User>): Promise<User> => {
        return await this.dataAccess.updateUser(id, data);
    };

    deleteUser = async (id: string): Promise<void> => {
        return await this.dataAccess.deleteUser(id);
    };
}
