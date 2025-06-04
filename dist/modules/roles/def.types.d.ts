export interface RoleQueryRequest {
    pagination?: {
        page?: number;
        limit?: number;
    };
    filters?: Partial<Role>;
}
export interface Role {
    id: string;
    name: string;
}
