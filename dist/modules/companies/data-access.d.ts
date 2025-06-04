import { CompanyQueryRequest, Company } from './def.types';
export declare class CompaniesDataAccess {
    private db;
    constructor();
    getCompanies: (filters?: CompanyQueryRequest["filters"], pagination?: CompanyQueryRequest["pagination"]) => Promise<Company[]>;
    saveCompanies: (companies: Company[]) => Promise<Company[]>;
    updateCompany: (id: string, data: Partial<Company>) => Promise<Company>;
    deleteCompany: (id: string) => Promise<void>;
}
