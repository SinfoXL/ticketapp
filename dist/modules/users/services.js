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
exports.UsersServices = void 0;
const data_access_1 = require("./data-access");
const jwt_generator_1 = require("../../helpers/jwt-generator");
const encryption_1 = require("../../utils/encryption");
class UsersServices {
    constructor() {
        this.getUsers = (query) => __awaiter(this, void 0, void 0, function* () {
            const { filters, pagination } = query;
            return yield this.dataAccess.getUsers(filters, pagination);
        });
        this.saveUsers = (users) => __awaiter(this, void 0, void 0, function* () {
            const temporalPassword = this.generateTempPassword(12);
            for (const user of users) {
                user.passwordHash = yield (0, encryption_1.hashPassword)(temporalPassword);
            }
            return yield this.dataAccess.saveUsers(users);
        });
        this.updateUser = (id, data) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.updateUser(id, data);
        });
        this.changeUserStatus = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.changeUserStatus(id);
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.deleteUser(id);
        });
        this.login = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.dataAccess.getUsers({ email });
            if (!user || user.length === 0 || !(yield (0, encryption_1.comparePassword)(password, user[0].passwordHash))) {
                return { accessToken: null, refreshToken: null };
            }
            const accessToken = (0, jwt_generator_1.generateAccessToken)({ id: user[0].id, role: user[0].role });
            const refreshToken = (0, jwt_generator_1.generateRefreshToken)({ id: user[0].id });
            return { accessToken, refreshToken };
        });
        this.register = (user) => __awaiter(this, void 0, void 0, function* () {
            user.password = yield (0, encryption_1.hashPassword)(user.password);
            const savedUser = yield this.dataAccess.registerUser(user);
            if (!savedUser) {
                return { accessToken: null, refreshToken: null };
            }
            const accessToken = (0, jwt_generator_1.generateAccessToken)({ id: savedUser.id, role: savedUser.role });
            const refreshToken = (0, jwt_generator_1.generateRefreshToken)({ id: savedUser.id });
            return { accessToken, refreshToken };
        });
        this.getMyProfile = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.getUserById(id);
        });
        this.dataAccess = new data_access_1.UsersDataAccess();
    }
    generateTempPassword(length = 8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        for (let i = 0; i < length; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    }
}
exports.UsersServices = UsersServices;
//# sourceMappingURL=services.js.map