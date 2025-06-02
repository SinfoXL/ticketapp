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

    login = async (email: string, password: string): Promise<AuthToken> => {
        const user = await this.dataAccess.getUsers({ email });

        console.log('User found:', user); // Debugging line to check user retrieval
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
}
