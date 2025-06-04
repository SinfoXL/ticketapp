import { Company, CompanyQueryRequest } from './def.types';
export declare class CompaniesServices {
    private dataAccess;
    constructor();
    getCompanies: ({ filters, pagination }: CompanyQueryRequest) => Promise<Company[]>;
    saveCompanies: (companies: Company[]) => Promise<Company[]>;
    updateCompany: (id: string, data: Partial<Company>) => Promise<Company>;
    deleteCompany: (id: string) => Promise<void>;
}
