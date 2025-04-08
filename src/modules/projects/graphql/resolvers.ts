import { Project } from '../def.types';
import { ProjectsServices } from '../services';

const projectServices = new ProjectsServices();

export const projectResolvers = {
    Query: {
        getProjects: async (_: any, args: any) => {
            return await projectServices.getProjects(args);
        },
    },
    Mutation: {
        createProject: async (_: any, data: Project[]) => {
            return await projectServices.saveProjects(data);
        },
        updateProject: async (_: any, { id, data }: { id: string; data: Partial<Project> }) => {
            return await projectServices.updateProject(id, data);
        },
        deleteProject: async (_: any, { id }: { id: string }) => {
            await projectServices.deleteProject(id);
            return true;
        },
    },
};
