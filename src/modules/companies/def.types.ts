export interface Company {
    id: string;
    name: string;
    parentId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface CompanyQueryRequest {
    filters?: Partial<Pick<Company, 'id' | 'name' | 'parentId'>>;
    pagination?: {
        page?: number;
        limit?: number;
    };
}
