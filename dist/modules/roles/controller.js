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
exports.RolesController = void 0;
const responses_1 = require("../../helpers/responses");
const services_1 = require("./services");
const request_utils_1 = require("../../utils/request-utils");
class RolesController {
    constructor() {
        this.getRoles = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'name']);
            const roles = yield this.service.getRoles({ filters, pagination });
            if (!roles)
                (0, responses_1.NotFound)(res, 'Roles not found');
            (0, responses_1.Ok)(res, roles);
        });
        this.saveRoles = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body.roles;
            const rolesToSave = body;
            const rolesSaved = yield this.service.saveRoles(rolesToSave);
            (0, responses_1.Created)(res, rolesSaved);
        });
        this.updateRoles = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            const id = req.params.id;
            const roleUpdated = yield this.service.updateRole(id, name);
            if (!roleUpdated)
                (0, responses_1.NotFound)(res, 'Roles not found');
            (0, responses_1.Ok)(res, roleUpdated);
        });
        this.deleteRoles = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.service.deleteRole(id);
            (0, responses_1.Ok)(res, id);
        });
        this.service = new services_1.RolesServices();
    }
}
exports.RolesController = RolesController;
//# sourceMappingURL=controller.js.map