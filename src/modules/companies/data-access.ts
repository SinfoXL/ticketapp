import { Database } from '../../database/instance';
import { CompanyQueryRequest, Company } from './def.types';
import { buildWhereClause } from '../../helpers/where-clause';

export class CompaniesDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getCompanies = async (filters: CompanyQueryRequest['filters'] = {}, pagination: CompanyQueryRequest['pagination'] = {}): Promise<Company[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.company.findMany({
            where: buildWhereClause<Company>(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveCompanies = async (companies: Company[]): Promise<Company[]> => {
        return await this.db.company.createManyAndReturn({
            data: companies,
            skipDuplicates: true,
        });
    };

    updateCompany = async (id: string, data: Partial<Company>): Promise<Company> => {
        return await this.db.company.update({
            where: { id },
            data,
        });
    };

    deleteCompany = async (id: string): Promise<void> => {
        await this.db.company.delete({
            where: { id },
        });
        return;
    };
}
