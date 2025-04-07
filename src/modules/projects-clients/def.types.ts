export interface ProjectClient {
    id: string;
    projectId: string;
    userId: string;
    createdAt: Date;
}

export interface ProjectClientQueryRequest {
    filters?: Partial<Pick<ProjectClient, 'id' | 'projectId' | 'userId'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
