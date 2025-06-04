import { Project } from '../def.types';
export declare const projectResolvers: {
    Query: {
        getProjects: (_: any, args: any) => Promise<Project[]>;
    };
    Mutation: {
        createProject: (_: any, data: Project[]) => Promise<Project[]>;
        updateProject: (_: any, { id, data }: {
            id: string;
            data: Partial<Project>;
        }) => Promise<Project>;
        deleteProject: (_: any, { id }: {
            id: string;
        }) => Promise<boolean>;
    };
};
