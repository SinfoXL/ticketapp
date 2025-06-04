import { ProjectQueryRequest, Project } from './def.types';
export declare class ProjectsDataAccess {
    private db;
    constructor();
    getProjects: (filters?: ProjectQueryRequest["filters"], pagination?: ProjectQueryRequest["pagination"]) => Promise<Project[]>;
    saveProjects: (projects: Project[]) => Promise<Project[]>;
    updateProject: (id: string, data: Partial<Project>) => Promise<Project>;
    deleteProject: (id: string) => Promise<void>;
}
