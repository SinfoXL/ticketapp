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
exports.UsersDataAccess = void 0;
const instance_1 = require("../../database/instance");
const where_clause_1 = require("../../helpers/where-clause");
class UsersDataAccess {
    constructor() {
        this.getUsers = (...args_1) => __awaiter(this, [...args_1], void 0, function* (filters = {}, pagination = {}) {
            const { page = 1, limit = 10 } = pagination;
            return yield this.db.user.findMany({
                where: (0, where_clause_1.buildWhereClause)(filters),
                take: limit,
                skip: (page - 1) * limit,
                include: {
                    role: true,
                    company: true,
                },
            });
        });
        this.saveUsers = (users) => __awaiter(this, void 0, void 0, function* () {
            return yield this.db.user.createManyAndReturn({
                data: users,
                skipDuplicates: true,
            });
        });
        this.updateUser = (id, data) => __awaiter(this, void 0, void 0, function* () {
            return yield this.db.user.update({
                where: { id },
                data,
            });
        });
        this.changeUserStatus = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.db.user.findUnique({
                where: { id },
            });
            if (!user)
                return null;
            return yield this.db.user.update({
                where: { id },
                data: { active: !user.active },
            });
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            yield this.db.user.delete({
                where: { id },
            });
            return;
        });
        this.registerUser = (userData) => __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, companyId } = userData;
            return yield this.db.user.create({
                data: {
                    name,
                    email,
                    passwordHash: password,
                    companyId: companyId || null,
                    active: true,
                    roleId: '0dd762fe-5529-4025-ac97-749674b6bccc',
                },
            });
        });
        this.getUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.db.user.findUnique({
                where: { id },
                include: {
                    role: true,
                },
                omit: {
                    passwordHash: true,
                },
            });
        });
        this.db = instance_1.Database.getInstance();
    }
}
exports.UsersDataAccess = UsersDataAccess;
//# sourceMappingURL=data-access.js.map