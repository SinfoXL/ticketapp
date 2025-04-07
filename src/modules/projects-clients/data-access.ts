import { Database } from '../../database/instance';
import { ProjectClientQueryRequest, ProjectClient } from './def.types';
import { buildWhereClause } from '../../helpers/buildWhereClause';

export class ProjectClientsDataAccess {
    private db: Database;

    constructor() {
        this.db = Database.getInstance();
    }

    getProjectClients = async (filters: ProjectClientQueryRequest['filters'] = {}, pagination: ProjectClientQueryRequest['pagination'] = {}): Promise<ProjectClient[]> => {
        const { page = 1, limit = 10 } = pagination;
        return await this.db.projectClient.findMany({
            where: buildWhereClause<ProjectClient>(filters),
            take: limit,
            skip: (page - 1) * limit,
        });
    };

    saveProjectClients = async (projectClients: ProjectClient[]): Promise<ProjectClient[]> => {
        return await this.db.projectClient.createManyAndReturn({
            data: projectClients,
            skipDuplicates: true,
        });
    };

    updateProjectClient = async (id: string, data: Partial<ProjectClient>): Promise<ProjectClient> => {
        return await this.db.projectClient.update({
            where: { id },
            data,
        });
    };

    deleteProjectClient = async (id: string): Promise<void> => {
        await this.db.projectClient.delete({
            where: { id },
        });
        return;
    };
}
