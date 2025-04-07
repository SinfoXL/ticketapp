import { PrismaClient } from '@prisma/client';
type dbInstance = Database | null;

//singleton pattern to avoid multiple instances
export class Database extends PrismaClient {
    private static instance: dbInstance = null;

    private constructor() {
        super();
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}
