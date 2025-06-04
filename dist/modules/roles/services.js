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
exports.RolesServices = void 0;
const data_access_1 = require("./data-access");
const server_1 = require("../../server");
class RolesServices {
    constructor() {
        this.getRoles = (_a) => __awaiter(this, [_a], void 0, function* ({ filters, pagination }) {
            server_1.socketServer.emitToAll('roles', 'getRoles');
            return yield this.dataAccess.getRoles(filters, pagination);
        });
        this.saveRoles = (roles) => __awaiter(this, void 0, void 0, function* () {
            server_1.socketServer.emitToAll('roles', 'saveRoles');
            return yield this.dataAccess.saveRoles(roles);
        });
        this.updateRole = (id, name) => __awaiter(this, void 0, void 0, function* () {
            server_1.socketServer.emitToAll('roles', `updateRole-${id} with name ${name}`);
            return yield this.dataAccess.updateRole(id, name);
        });
        this.deleteRole = (id) => __awaiter(this, void 0, void 0, function* () {
            server_1.socketServer.emitToAll('roles', `deleteRole-${id}`);
            return yield this.dataAccess.deleteRole(id);
        });
        this.dataAccess = new data_access_1.RolesDataAccess();
    }
}
exports.RolesServices = RolesServices;
//# sourceMappingURL=services.js.map