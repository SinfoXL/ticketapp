"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRoutes = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const loadRoutes = (app) => {
    const modulesPath = path_1.default.join(__dirname, '../modules');
    fs_1.default.readdirSync(modulesPath).forEach((moduleName) => {
        const tsRoutePath = path_1.default.join(modulesPath, moduleName, 'routes.ts');
        const jsRoutePath = path_1.default.join(modulesPath, moduleName, 'routes.js');
        let routePath = '';
        if (fs_1.default.existsSync(tsRoutePath)) {
            routePath = tsRoutePath;
        }
        else if (fs_1.default.existsSync(jsRoutePath)) {
            routePath = jsRoutePath;
        }
        if (routePath) {
            const moduleRoutes = require(routePath);
            if (moduleRoutes.default) {
                app.use(`/api/${moduleName}`, moduleRoutes.default);
            }
        }
    });
};
exports.loadRoutes = loadRoutes;
//# sourceMappingURL=routes-loader.js.map