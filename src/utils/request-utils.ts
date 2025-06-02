/**
 * This module provides utility functions to extract pagination from a request query object.
 * @param query This is the query object from the request, typically `req.query` in an Express.js application but take only pagination related keys.
 * @returns 
 */

export const extractPagination = (query: any): { page: number; limit: number } => {
    const page = parseInt(query.page as string, 10) || 1;
    const limit = parseInt(query.limit as string, 10) || 10;
    return { page, limit };
};

/**
 *  We recive a query object from the request and we extract only the valid keys that are defined in the validKeys array
 * @param query This is the query object from the request 
 * @param validKeys An array of valid keys to extract from the query is configurable from the controller to avoid exposing all query parameters
 * @returns A record containing only the valid filters extracted from the query
 */
export const extractFilters = (query: any, validKeys: string[]): Record<string, any> => {
    const filters: Record<string, any> = {};
    validKeys.forEach((key) => {
        if (query[key] !== undefined) {
            filters[key] = query[key];
        }
    });
    return filters;
};
