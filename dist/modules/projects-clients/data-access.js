"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectClientsDataAccess = void 0;
const instance_1 = require("../../database/instance");
const where_clause_1 = require("../../helpers/where-clause");
class ProjectClientsDataAccess {
    constructor() {
        this.getProjectClients = (...args_1) => __awaiter(this, [...args_1], void 0, function* (filters = {}, pagination = {}) {
            const { page = 1, limit = 10 } = pagination;
            return yield this.db.projectClient.findMany({
                where: (0, where_clause_1.buildWhereClause)(filters),
                take: limit,
                skip: (page - 1) * limit,
            });
        });
        this.saveProjectClients = (projectClients) => __awaiter(this, void 0, void 0, function* () {
            return yield this.db.projectClient.createManyAndReturn({
                data: projectClients,
                skipDuplicates: true,
            });
        });
        this.updateProjectClient = (id, data) => __awaiter(this, void 0, void 0, function* () {
            return yield this.db.projectClient.update({
                where: { id },
                data,
            });
        });
        this.deleteProjectClient = (id) => __awaiter(this, void 0, void 0, function* () {
            yield this.db.projectClient.delete({
                where: { id },
            });
            return;
        });
        this.db = instance_1.Database.getInstance();
    }
}
exports.ProjectClientsDataAccess = ProjectClientsDataAccess;
//# sourceMappingURL=data-access.js.map