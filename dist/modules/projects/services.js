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
exports.ProjectsServices = void 0;
const data_access_1 = require("./data-access");
class ProjectsServices {
    constructor() {
        this.getProjects = (_a) => __awaiter(this, [_a], void 0, function* ({ filters, pagination }) {
            return yield this.dataAccess.getProjects(filters, pagination);
        });
        this.saveProjects = (projects) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.saveProjects(projects);
        });
        this.updateProject = (id, data) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.updateProject(id, data);
        });
        this.deleteProject = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.deleteProject(id);
        });
        this.dataAccess = new data_access_1.ProjectsDataAccess();
    }
}
exports.ProjectsServices = ProjectsServices;
//# sourceMappingURL=services.js.map