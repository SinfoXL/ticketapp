export interface RoleQueryRequest {
    pagination?: {
        page?: number;
        limit?: number;
    };
    filters?: Partial<Role>; // Se usa Partial para que los filtros sean opcionales
}

export interface Role {
    id: string; // Cambiado de number a string
    name: string;
}
