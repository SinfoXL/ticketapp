"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.UsersController = void 0;
const responses_1 = require("../../helpers/responses");
const services_1 = require("./services");
const request_utils_1 = require("../../utils/request-utils");
const js2xmlparser = __importStar(require("js2xmlparser"));
class UsersController {
    constructor() {
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'name', 'email']);
            const users = yield this.service.getUsers({ filters, pagination });
            if (!users)
                (0, responses_1.NotFound)(res, 'Users not found');
            (0, responses_1.Ok)(res, users);
        });
        this.getUsersXML = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'name', 'email']);
            const users = yield this.service.getUsers({ filters, pagination });
            if (!users)
                (0, responses_1.NotFound)(res, 'Users not found');
            res.set('Content-Type', 'application/xml');
            res.send(js2xmlparser.parse('users', { users }));
        });
        this.saveUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = req.body.users;
            const usersSaved = yield this.service.saveUsers(users);
            (0, responses_1.Created)(res, usersSaved);
        });
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const id = req.params.id;
            const userUpdated = yield this.service.updateUser(id, data);
            if (!userUpdated)
                (0, responses_1.NotFound)(res, 'User not found');
            (0, responses_1.Ok)(res, userUpdated);
        });
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.service.deleteUser(id);
            (0, responses_1.Ok)(res, id);
        });
        this.changeUserStatus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.service.changeUserStatus(id);
            if (!user)
                (0, responses_1.NotFound)(res, 'User not found');
            (0, responses_1.Ok)(res, user);
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const { accessToken, refreshToken } = yield this.service.login(email, password);
            if (!accessToken || !refreshToken)
                (0, responses_1.Forbidden)(res, 'Ha ocurrido un error al iniciar sesión, usaurio o contraseña incorrectos');
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                maxAge: 1000 * 60 * 60,
            }).cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                maxAge: 1000 * 60 * 60 * 24 * 7,
            });
            (0, responses_1.Ok)(res, { accessToken, refreshToken });
        });
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            const { accessToken, refreshToken } = yield this.service.register(userData);
            if (!accessToken || !refreshToken)
                (0, responses_1.Forbidden)(res, 'Ha ocurrido un error al registrar el usuario');
            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                maxAge: 1000 * 60 * 60,
            }).cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                maxAge: 1000 * 60 * 60 * 24 * 7,
            });
            (0, responses_1.Created)(res, { accessToken, refreshToken });
        });
        this.profile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userId = ((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) || '';
            if (!userId)
                (0, responses_1.BadRequest)(res, 'Sorry, you are not logged in');
            const user = yield this.service.getMyProfile(userId);
            (0, responses_1.Ok)(res, user);
        });
        this.logout = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.clearCookie('accessToken').clearCookie('refreshToken');
            (0, responses_1.Ok)(res, 'Logged out successfully');
        });
        this.service = new services_1.UsersServices();
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=controller.js.map