import { ProjectClient, ProjectClientQueryRequest } from './def.types';
export declare class ProjectClientsServices {
    private dataAccess;
    constructor();
    getProjectClients: ({ filters, pagination }: ProjectClientQueryRequest) => Promise<ProjectClient[]>;
    saveProjectClients: (projectClients: ProjectClient[]) => Promise<ProjectClient[]>;
    updateProjectClient: (id: string, data: Partial<ProjectClient>) => Promise<ProjectClient>;
    deleteProjectClient: (id: string) => Promise<void>;
}
