import { Request, Response } from 'express';
import { User, UserRegisterRequest } from './def.types';
import { Created, Ok, NotFound } from '../../helpers/responses';
import { UsersServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';

export class UsersController {
    private service: UsersServices;

    constructor() {
        this.service = new UsersServices();
    }

    getUsers = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'name', 'email']);
        const users = await this.service.getUsers({ filters, pagination });

        if (!users) NotFound(res, 'Users not found');
        Ok(res, users);
    };

    saveUsers = async (req: Request, res: Response): Promise<void> => {
        const body: User[] = req.body;
        const usersSaved = await this.service.saveUsers(body);
        Created(res, usersSaved);
    };

    updateUser = async (req: Request, res: Response): Promise<void> => {
        const data: Partial<User> = req.body;
        const id = req.params.id;

        const userUpdated = await this.service.updateUser(id, data);

        if (!userUpdated) NotFound(res, 'User not found');
        Ok(res, userUpdated);
    };

    deleteUser = async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        await this.service.deleteUser(id);
        Ok(res, id);
    };

    login = async (req: Request, res: Response): Promise<void> => {
        const { email, password } = req.body;
        const { accessToken, refreshToken } = await this.service.login(email, password);

        if (!accessToken || !refreshToken) NotFound(res, 'Ha ocurrido un error al iniciar sesión, usaurio o contraseña incorrectos');
        Ok(res, { accessToken, refreshToken });
    };

    register = async (req: Request, res: Response): Promise<void> => {
        const userData: UserRegisterRequest = req.body;
        const { accessToken, refreshToken } = await this.service.register(userData);

        if (!accessToken || !refreshToken) NotFound(res, 'Ha ocurrido un error al registrar el usuario');
        Created(res, { accessToken, refreshToken });
    };
}
