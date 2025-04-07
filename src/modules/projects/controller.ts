import { Request, Response } from 'express';
import { Project } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { ProjectsServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class ProjectsController {
    private service: ProjectsServices;

    constructor() {
        this.service = new ProjectsServices();
    }

    getProjects = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'name']);
        const projects = await this.service.getProjects({ filters, pagination });

        if (!projects) NotFound(res, 'Projects not found');
        Ok(res, projects);
    };

    saveProjects = async (req: Request, res: Response): Promise<void> => {
        const body: Project[] = req.body;
        const projectsSaved = await this.service.saveProjects(body);
        Created(res, projectsSaved);
    };

    updateProject = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<Project> = req.body;
        const id = req.params.id;

        const projectUpdated = await this.service.updateProject(id, data);

        if (!projectUpdated) NotFound(res, 'Project not found');
        Ok(res, projectUpdated);
    };

    deleteProject = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await this.service.deleteProject(id);
        Ok(res, id);
    };
}
