import { Project, ProjectQueryRequest } from './def.types';
export declare class ProjectsServices {
    private dataAccess;
    constructor();
    getProjects: ({ filters, pagination }: ProjectQueryRequest) => Promise<Project[]>;
    saveProjects: (projects: Project[]) => Promise<Project[]>;
    updateProject: (id: string, data: Partial<Project>) => Promise<Project>;
    deleteProject: (id: string) => Promise<void>;
}
