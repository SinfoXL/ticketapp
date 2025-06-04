"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const client_1 = require("@prisma/client");
class Database extends client_1.PrismaClient {
    constructor() {
        super();
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}
exports.Database = Database;
Database.instance = null;
//# sourceMappingURL=instance.js.map