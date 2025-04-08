import { Company } from '../def.types';
import { CompaniesServices } from '../services';

const companyServices = new CompaniesServices();

export const companyResolvers = {
    Query: {
        getCompanies: async (_: any, args: any) => {
            return await companyServices.getCompanies(args);
        },
    },
    Mutation: {
        createCompany: async (_: any, data: Company[]) => {
            return await companyServices.saveCompanies(data);
        },
        updateCompany: async (_: any, { id, data }: { id: string; data: Partial<Company> }) => {
            return await companyServices.updateCompany(id, data);
        },
        deleteCompany: async (_: any, { id }: { id: string }) => {
            await companyServices.deleteCompany(id);
            return true;
        },
    },
    Company: {
        parent: async (_: any, args: any) => {
            return await companyServices.getCompanies(args);
        },
    },
};
