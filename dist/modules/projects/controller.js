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
exports.ProjectsController = void 0;
const responses_1 = require("../../helpers/responses");
const services_1 = require("./services");
const request_utils_1 = require("../../utils/request-utils");
class ProjectsController {
    constructor() {
        this.getProjects = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'name']);
            const projects = yield this.service.getProjects({ filters, pagination });
            if (!projects)
                (0, responses_1.NotFound)(res, 'Projects not found');
            (0, responses_1.Ok)(res, projects);
        });
        this.saveProjects = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const projectsSaved = yield this.service.saveProjects(body);
            (0, responses_1.Created)(res, projectsSaved);
        });
        this.updateProject = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const id = req.params.id;
            const projectUpdated = yield this.service.updateProject(id, data);
            if (!projectUpdated)
                (0, responses_1.NotFound)(res, 'Project not found');
            (0, responses_1.Ok)(res, projectUpdated);
        });
        this.deleteProject = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.service.deleteProject(id);
            (0, responses_1.Ok)(res, id);
        });
        this.service = new services_1.ProjectsServices();
    }
}
exports.ProjectsController = ProjectsController;
//# sourceMappingURL=controller.js.map