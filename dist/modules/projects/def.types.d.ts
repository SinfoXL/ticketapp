export interface Project {
    id: string;
    name: string;
    description?: string | null;
    companyId: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface ProjectQueryRequest {
    filters?: Partial<Pick<Project, 'id' | 'name' | 'companyId'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
