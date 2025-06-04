"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFilters = exports.extractPagination = void 0;
const extractPagination = (query) => {
    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;
    return { page, limit };
};
exports.extractPagination = extractPagination;
const extractFilters = (query, validKeys) => {
    const filters = {};
    validKeys.forEach((key) => {
        if (query[key] !== undefined) {
            filters[key] = query[key];
        }
    });
    return filters;
};
exports.extractFilters = extractFilters;
//# sourceMappingURL=request-utils.js.map