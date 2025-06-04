import { User } from '../def.types';
export declare const userResolvers: {
    Query: {
        getUsers: (_: any, args: any) => Promise<User[]>;
    };
    Mutation: {
        saveUsers: (_: any, data: User[]) => Promise<User[]>;
        updateUser: (_: any, args: any) => Promise<User>;
        deleteUser: (_: any, args: any) => Promise<boolean>;
    };
};
