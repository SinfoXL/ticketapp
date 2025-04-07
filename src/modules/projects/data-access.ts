import { Database } from '../../database/instance';
import { ProjectQueryRequest, Project } from './def.types';

export class ProjectsDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    private buildWhereClause(filters: ProjectQueryRequest['filters'] = {}): Partial<Project> {
        const whereClause: Partial<Project> = {};
        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined) {
                whereClause[key as keyof Project] = value;
            }
        });
        return whereClause;
    }

    getProjects = async (filters: ProjectQueryRequest['filters'], pagination: ProjectQueryRequest['pagination']): Promise<Project[]> => {
        const page = pagination?.page || 1;
        const limit = pagination?.limit || 10;

        return await this.db.project.findMany({
            where: this.buildWhereClause(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveProjects = async (projects: Project[]): Promise<Project[]> => {
        const projectsSaved = await this.db.project.createManyAndReturn({
            data: projects,
            skipDuplicates: true,
        });
        return projectsSaved;
    };

    updateProject = async (id: string, data: Partial<Project>): Promise<Project> => {
        const projectUpdated = await this.db.project.update({
            where: { id },
            data,
        });
        return projectUpdated;
    };

    deleteProject = async (id: string): Promise<void> => {
        await this.db.project.delete({
            where: { id },
        });
        return;
    };
}
