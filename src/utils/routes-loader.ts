import fs from 'fs';
import path from 'path';
import { Express } from 'express';

export const loadRoutes = (app: Express) => {
    const modulesPath = path.join(__dirname, '../modules');

    fs.readdirSync(modulesPath).forEach((moduleName) => {
        const tsRoutePath = path.join(modulesPath, moduleName, 'routes.ts');
        const jsRoutePath = path.join(modulesPath, moduleName, 'routes.js');

        let routePath = '';
        if (fs.existsSync(tsRoutePath)) {
            routePath = tsRoutePath;
        } else if (fs.existsSync(jsRoutePath)) {
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
