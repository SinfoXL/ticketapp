import { Request, Response } from 'express';
import { User, UserRegisterRequest } from './def.types';
import { Created, Ok, NotFound, Forbidden, BadRequest } from '../../helpers/responses';
import { UsersServices } from './services';
import { extractPagination, extractFilters } from '../../utils/request-utils';
import * as js2xmlparser from 'js2xmlparser';
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

    getUsersXML = async (req: Request, res: Response): Promise<void> => {
        const pagination = extractPagination(req.query);
        const filters = extractFilters(req.query, ['id', 'name', 'email']);
        const users = await this.service.getUsers({ filters, pagination });

        if (!users) NotFound(res, 'Users not found');
        res.set('Content-Type', 'application/xml');
        res.send(js2xmlparser.parse('users', { users }));
    };

    saveUsers = async (req: Request, res: Response): Promise<void> => {
        const users: User[] = req.body.users;
        const usersSaved = await this.service.saveUsers(users);
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

    changeUserStatus = async (req: Request, res: Response): Promise<void> => {
        //Change activation status of a user
        const { id } = req.params;
        const user = await this.service.changeUserStatus(id);

        if (!user) NotFound(res, 'User not found');
        Ok(res, user);
    };

    login = async (req: Request, res: Response): Promise<void> => {
        const { email, password } = req.body;
        const { accessToken, refreshToken } = await this.service.login(email, password);

        if (!accessToken || !refreshToken) Forbidden(res, 'Ha ocurrido un error al iniciar sesión, usaurio o contraseña incorrectos');
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60, // 1 hora
        }).cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 días
        });
        Ok(res, { accessToken, refreshToken });
    };

    register = async (req: Request, res: Response): Promise<void> => {
        const userData: UserRegisterRequest = req.body;
        const { accessToken, refreshToken } = await this.service.register(userData);

        if (!accessToken || !refreshToken) Forbidden(res, 'Ha ocurrido un error al registrar el usuario');
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60, // 1 hora
        }).cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 días
        });
        Created(res, { accessToken, refreshToken });
    };

    profile = async (req: Request, res: Response): Promise<void> => {
        const userId = req.user?.id || '';
        if (!userId) BadRequest(res, 'Sorry, you are not logged in');

        const user = await this.service.getMyProfile(userId);
        Ok(res, user);
    };

    logout = async (req: Request, res: Response): Promise<void> => {
        res.clearCookie('accessToken').clearCookie('refreshToken');
        Ok(res, 'Logged out successfully');
    };
}
