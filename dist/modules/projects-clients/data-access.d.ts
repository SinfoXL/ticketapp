import { ProjectClientQueryRequest, ProjectClient } from './def.types';
export declare class ProjectClientsDataAccess {
    private db;
    constructor();
    getProjectClients: (filters?: ProjectClientQueryRequest["filters"], pagination?: ProjectClientQueryRequest["pagination"]) => Promise<ProjectClient[]>;
    saveProjectClients: (projectClients: ProjectClient[]) => Promise<ProjectClient[]>;
    updateProjectClient: (id: string, data: Partial<ProjectClient>) => Promise<ProjectClient>;
    deleteProjectClient: (id: string) => Promise<void>;
}
