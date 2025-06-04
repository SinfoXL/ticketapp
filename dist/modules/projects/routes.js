"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const catcher_1 = require("../../helpers/catcher");
const router = (0, express_1.Router)();
const controller = new controller_1.ProjectsController();
router.get('/', (0, catcher_1.catcher)(controller.getProjects));
router.post('/save', (0, catcher_1.catcher)(controller.saveProjects));
router.patch('/update/:id', (0, catcher_1.catcher)(controller.updateProject));
router.delete('/delete/:id', (0, catcher_1.catcher)(controller.deleteProject));
exports.default = router;
//# sourceMappingURL=routes.js.map