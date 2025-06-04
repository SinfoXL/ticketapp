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
exports.projectResolvers = void 0;
const services_1 = require("../services");
const projectServices = new services_1.ProjectsServices();
exports.projectResolvers = {
    Query: {
        getProjects: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield projectServices.getProjects(args);
        }),
    },
    Mutation: {
        createProject: (_, data) => __awaiter(void 0, void 0, void 0, function* () {
            return yield projectServices.saveProjects(data);
        }),
        updateProject: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, data }) {
            return yield projectServices.updateProject(id, data);
        }),
        deleteProject: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            yield projectServices.deleteProject(id);
            return true;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map