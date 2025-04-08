import { CompaniesDataAccess } from './data-access';
import { Company, CompanyQueryRequest } from './def.types';

export class CompaniesServices {
    private dataAccess: CompaniesDataAccess;

    constructor() {
        this.dataAccess = new CompaniesDataAccess();
    }

    getCompanies = async ({ filters, pagination }: CompanyQueryRequest): Promise<Company[]> => {
        return await this.dataAccess.getCompanies(filters, pagination);
    };

    saveCompanies = async (companies: Company[]): Promise<Company[]> => {
        return await this.dataAccess.saveCompanies(companies);
    };

    updateCompany = async (id: string, data: Partial<Company>): Promise<Company> => {
        return await this.dataAccess.updateCompany(id, data);
    };

    deleteCompany = async (id: string): Promise<void> => {
        return await this.dataAccess.deleteCompany(id);
    };
}
