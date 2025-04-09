import { Request, Response } from 'express';
import { Role } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { RolesServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

// TODO it's necessary to type request parts

export class RolesController {
    private service: RolesServices;

    constructor() {
        this.service = new RolesServices();
    }

    getRoles = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'name']);
        const roles = await this.service.getRoles({ filters, pagination });

        if (!roles) NotFound(res, 'Roles not found');
        Ok(res, roles);
    };

    saveRoles = async (req: Request, res: Response): Promise<void> => {
        // Logic to save roles
        const body: Role[] = req.body;
        const rolesToSave = body;

        const rolesSaved = await this.service.saveRoles(rolesToSave);
        Created(res, rolesSaved);
    };

    updateRoles = async (req: Request, res: Response): Promise<void> => {
        // Logic to update roles
        const name: string = req.body;
        const id = req.params.id;

        const roleUpdated = await this.service.updateRole(id, name);

        if (!roleUpdated) NotFound(res, 'Roles not found');
        Ok(res, roleUpdated);
    };

    deleteRoles = async (req: Request, res: Response): Promise<void> => {
        // Logic to delete roles
        const { id } = req.params;
        await this.service.deleteRole(id);
        Ok(res, id);
    };
}
