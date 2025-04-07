import { Express } from 'express';
import fs from 'fs';
import path from 'path';

// This function loads all the routes from the modules directory and registers them with the Express app.
// It reads the directory, checks for a routes.ts file in each module, and if it exists, it requires the file and uses the routes with the app.
// The routes are registered under the module name, so if you have a module named "users", the routes will be available under "/users".
export const loadRoutes = (app: Express): void => {
    const modulesPath = path.join(__dirname, 'modules');
    fs.readdirSync(modulesPath).forEach((moduleName) => {
        const moduleRoutesPath = path.join(modulesPath, moduleName, 'routes.ts');
        if (fs.existsSync(moduleRoutesPath)) {
            const moduleRoutes = require(moduleRoutesPath);
            if (moduleRoutes.default) {
                app.use(`/api/${moduleName}`, moduleRoutes.default);
            }
        }
    });
};
