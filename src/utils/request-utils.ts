export const extractPagination = (query: any): { page: number; limit: number } => {
    const page = parseInt(query.page as string, 10) || 1;
    const limit = parseInt(query.limit as string, 10) || 10;
    return { page, limit };
};

export const extractFilters = (query: any, validKeys: string[]): Record<string, any> => {
    const filters: Record<string, any> = {};
    validKeys.forEach((key) => {
        if (query[key] !== undefined) {
            filters[key] = query[key];
        }
    });
    return filters;
};
