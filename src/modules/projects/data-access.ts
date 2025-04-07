import { Database } from '../../database/instance';
import { ProjectQueryRequest, Project } from './def.types';
import { buildWhereClause } from '../../helpers/buildWhereClause';

export class ProjectsDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getProjects = async (filters: ProjectQueryRequest['filters'] = {}, pagination: ProjectQueryRequest['pagination'] = {}): Promise<Project[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.project.findMany({
            where: buildWhereClause<Project>(filters),
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
