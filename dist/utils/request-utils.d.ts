export declare const extractPagination: (query: any) => {
    page: number;
    limit: number;
};
export declare const extractFilters: (query: any, validKeys: string[]) => Record<string, any>;
