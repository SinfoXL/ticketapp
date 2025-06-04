import { Request, Response } from 'express';
export declare class UsersController {
    private service;
    constructor();
    getUsers: (req: Request, res: Response) => Promise<void>;
    getUsersXML: (req: Request, res: Response) => Promise<void>;
    saveUsers: (req: Request, res: Response) => Promise<void>;
    updateUser: (req: Request, res: Response) => Promise<void>;
    deleteUser: (req: Request, res: Response) => Promise<void>;
    changeUserStatus: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<void>;
    profile: (req: Request, res: Response) => Promise<void>;
    logout: (req: Request, res: Response) => Promise<void>;
}
