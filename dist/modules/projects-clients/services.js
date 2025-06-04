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
exports.ProjectClientsServices = void 0;
const data_access_1 = require("./data-access");
class ProjectClientsServices {
    constructor() {
        this.getProjectClients = (_a) => __awaiter(this, [_a], void 0, function* ({ filters, pagination }) {
            return yield this.dataAccess.getProjectClients(filters, pagination);
        });
        this.saveProjectClients = (projectClients) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.saveProjectClients(projectClients);
        });
        this.updateProjectClient = (id, data) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.updateProjectClient(id, data);
        });
        this.deleteProjectClient = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.deleteProjectClient(id);
        });
        this.dataAccess = new data_access_1.ProjectClientsDataAccess();
    }
}
exports.ProjectClientsServices = ProjectClientsServices;
//# sourceMappingURL=services.js.map