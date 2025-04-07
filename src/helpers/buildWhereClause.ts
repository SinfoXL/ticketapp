//This function builds a where clause for a SQL query based on the provided filters.
// It filters out any properties that have an undefined value, ensuring that only valid filters are included in the final query.
// This is useful for constructing dynamic queries where only certain filters may be applied based on user input or other conditions.

export function buildWhereClause<T extends Record<string, any>>(filters: Partial<T> = {}): Partial<T> {
    return Object.fromEntries(Object.entries(filters).filter(([_, value]) => value !== undefined)) as Partial<T>;
}
