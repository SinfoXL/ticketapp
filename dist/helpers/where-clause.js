"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWhereClause = buildWhereClause;
function buildWhereClause(filters = {}) {
    return Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== undefined));
}
//# sourceMappingURL=where-clause.js.map