import { Request, Response } from 'express';
import { Company } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { CompaniesServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class CompaniesController {
    private service: CompaniesServices;

    constructor() {
        this.service = new CompaniesServices();
    }

    getCompanies = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'name']);
        const companies = await this.service.getCompanies({ filters, pagination });

        if (!companies) NotFound(res, 'Companies not found');
        Ok(res, companies);
    };

    saveCompanies = async (req: Request, res: Response): Promise<void> => {
        const body: Company[] = req.body;
        const companiesSaved = await this.service.saveCompanies(body);
        Created(res, companiesSaved);
    };

    updateCompany = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<Company> = req.body;
        const id = req.params.id;

        const companyUpdated = await this.service.updateCompany(id, data);

        if (!companyUpdated) NotFound(res, 'Company not found');
        Ok(res, companyUpdated);
    };

    deleteCompany = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await this.service.deleteCompany(id);
        Ok(res, id);
    };
}
