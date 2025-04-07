import { Request, Response } from 'express';
import { ProjectClient } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { ProjectClientsServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class ProjectClientsController {
    private service: ProjectClientsServices;

    constructor() {
        this.service = new ProjectClientsServices();
    }

    getProjectClients = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'projectId', 'userId']);
        const projectClients = await this.service.getProjectClients({ filters, pagination });

        if (!projectClients) NotFound(res, 'Project clients not found');
        Ok(res, projectClients);
    };

    saveProjectClients = async (req: Request, res: Response): Promise<void> => {
        const body: ProjectClient[] = req.body;
        const projectClientsSaved = await this.service.saveProjectClients(body);
        Created(res, projectClientsSaved);
    };

    updateProjectClient = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<ProjectClient> = req.body;
        const id = req.params.id;

        const projectClientUpdated = await this.service.updateProjectClient(id, data);

        if (!projectClientUpdated) NotFound(res, 'Project client not found');
        Ok(res, projectClientUpdated);
    };

    deleteProjectClient = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await this.service.deleteProjectClient(id);
        Ok(res, id);
    };
}
