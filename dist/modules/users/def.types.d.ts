import { Role } from '../roles/def.types';
import { Company } from '../companies/def.types';
export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    roleId: string;
    role?: Role;
    companyId: string | null;
    company?: Company | null;
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
