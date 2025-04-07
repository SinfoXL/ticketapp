export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    roleId: string;
    companyId?: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserQueryRequest {
    filters?: Partial<Pick<User, 'id' | 'name' | 'email' | 'roleId' | 'companyId' | 'active'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
