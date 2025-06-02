import { Role } from '../roles/def.types';

export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string; // For login, passwordHash is optional
    roleId: string;
    role?: Role;
    companyId: string | null;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserRegisterRequest {
    name: string;
    email: string;
    password: string;
    companyId?: string | null;
}

export interface UserQueryRequest {
    filters?: Partial<Pick<User, 'id' | 'name' | 'email' | 'roleId' | 'companyId' | 'active'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
