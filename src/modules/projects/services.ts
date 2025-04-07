import { ProjectsDataAccess } from './data-access';
import { Project, ProjectQueryRequest } from './def.types';

export class ProjectsServices {
    private dataAccess: ProjectsDataAccess;

    constructor() {
        this.dataAccess = new ProjectsDataAccess();
    }

    getProjects = async (query: ProjectQueryRequest): Promise<Project[]> => {
        const { filters, pagination } = query;
        return await this.dataAccess.getProjects(filters, pagination);
    };

    saveProjects = async (projects: Project[]): Promise<Project[]> => {
        return await this.dataAccess.saveProjects(projects);
    };

    updateProject = async (id: string, data: Partial<Project>): Promise<Project> => {
        return await this.dataAccess.updateProject(id, data);
    };

    deleteProject = async (id: string): Promise<void> => {
        return await this.dataAccess.deleteProject(id);
    };
}
