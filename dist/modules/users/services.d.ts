import { User, UserQueryRequest, UserRegisterRequest } from './def.types';
interface AuthToken {
    accessToken: string | null;
    refreshToken: string | null;
}
export declare class UsersServices {
    private dataAccess;
    constructor();
    private generateTempPassword;
    getUsers: (query: UserQueryRequest) => Promise<User[]>;
    saveUsers: (users: User[]) => Promise<User[]>;
    updateUser: (id: string, data: Partial<User>) => Promise<User>;
    changeUserStatus: (id: string) => Promise<User | null>;
    deleteUser: (id: string) => Promise<void>;
    login: (email: string, password: string) => Promise<AuthToken>;
    register: (user: UserRegisterRequest) => Promise<AuthToken>;
    getMyProfile: (id: string) => Promise<Partial<User> | null>;
}
export {};
