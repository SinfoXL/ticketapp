import { Company } from '../def.types';
export declare const companyResolvers: {
    Query: {
        getCompanies: (_: any, args: any) => Promise<Company[]>;
    };
    Mutation: {
        createCompany: (_: any, data: Company[]) => Promise<Company[]>;
        updateCompany: (_: any, { id, data }: {
            id: string;
            data: Partial<Company>;
        }) => Promise<Company>;
        deleteCompany: (_: any, { id }: {
            id: string;
        }) => Promise<boolean>;
    };
    Company: {
        parent: (_: any, args: any) => Promise<Company[]>;
    };
};
