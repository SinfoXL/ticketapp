import { ProjectClientsDataAccess } from './data-access';
import { ProjectClient, ProjectClientQueryRequest } from './def.types';

export class ProjectClientsServices {
    private dataAccess: ProjectClientsDataAccess;

    constructor() {
        this.dataAccess = new ProjectClientsDataAccess();
    }

    getProjectClients = async ({ filters, pagination }: ProjectClientQueryRequest): Promise<ProjectClient[]> => {
        return await this.dataAccess.getProjectClients(filters, pagination);
    };

    saveProjectClients = async (projectClients: ProjectClient[]): Promise<ProjectClient[]> => {
        return await this.dataAccess.saveProjectClients(projectClients);
    };

    updateProjectClient = async (id: string, data: Partial<ProjectClient>): Promise<ProjectClient> => {
        return await this.dataAccess.updateProjectClient(id, data);
    };

    deleteProjectClient = async (id: string): Promise<void> => {
        return await this.dataAccess.deleteProjectClient(id);
    };
}
