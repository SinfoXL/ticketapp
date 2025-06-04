import { UserQueryRequest, User, UserRegisterRequest } from './def.types';
export declare class UsersDataAccess {
    private db;
    constructor();
    getUsers: (filters?: UserQueryRequest["filters"], pagination?: UserQueryRequest["pagination"]) => Promise<User[]>;
    saveUsers: (users: User[]) => Promise<User[]>;
    updateUser: (id: string, data: any) => Promise<User>;
    changeUserStatus: (id: string) => Promise<User | null>;
    deleteUser: (id: string) => Promise<void>;
    registerUser: (userData: UserRegisterRequest) => Promise<User>;
    getUserById: (id: string) => Promise<Partial<User> | null>;
}
