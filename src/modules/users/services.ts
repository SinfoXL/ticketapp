import { UsersDataAccess } from './data-access';
import { User, UserQueryRequest, UserRegisterRequest } from './def.types';
import { generateAccessToken, generateRefreshToken } from '../../helpers/jwt-generator';
import { hashPassword, comparePassword } from '../../utils/encryption';

interface AuthToken {
    accessToken: string | null;
    refreshToken: string | null;
}
export class UsersServices {
    private dataAccess: UsersDataAccess;

    constructor() {
        this.dataAccess = new UsersDataAccess();
    }

    // utils/generateTempPassword.js
    private generateTempPassword(length = 8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }

    getUsers = async (query: UserQueryRequest): Promise<User[]> => {
        const { filters, pagination } = query;
        return await this.dataAccess.getUsers(filters, pagination);
    };

    saveUsers = async (users: User[]): Promise<User[]> => {
        const temporalPassword = this.generateTempPassword(12);
        for (const user of users) {
            user.passwordHash = await hashPassword(temporalPassword);
        }
        return await this.dataAccess.saveUsers(users);
    };

    updateUser = async (id: string, data: Partial<User>): Promise<User> => {
        return await this.dataAccess.updateUser(id, data);
    };

    changeUserStatus = async (id: string): Promise<User | null> => {
        return await this.dataAccess.changeUserStatus(id);
    };

    deleteUser = async (id: string): Promise<void> => {
        return await this.dataAccess.deleteUser(id);
    };

    login = async (email: string, password: string): Promise<AuthToken> => {
        const user = await this.dataAccess.getUsers({ email });

        if (!user || user.length === 0 || !(await comparePassword(password, user[0].passwordHash))) {
            return { accessToken: null, refreshToken: null }; // User not found
        }
        const accessToken = generateAccessToken({ id: user[0].id, role: user[0].role });
        const refreshToken = generateRefreshToken({ id: user[0].id });

        return { accessToken, refreshToken };
    };

    register = async (user: UserRegisterRequest): Promise<AuthToken> => {
        user.password = await hashPassword(user.password);
        const savedUser = await this.dataAccess.registerUser(user);

        if (!savedUser) {
            return { accessToken: null, refreshToken: null }; // Registration failed
        }

        const accessToken = generateAccessToken({ id: savedUser.id, role: savedUser.role });
        const refreshToken = generateRefreshToken({ id: savedUser.id });

        return { accessToken, refreshToken };
    };

    getMyProfile = async (id: string): Promise<Partial<User> | null> => {
        return await this.dataAccess.getUserById(id);
    };
}
