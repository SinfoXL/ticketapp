export interface Project {
    id: string;
    name: string;
    description?: string | null; // Allow null values for description
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
