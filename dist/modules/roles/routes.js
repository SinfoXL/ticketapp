"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const catcher_1 = require("../../helpers/catcher");
const router = (0, express_1.Router)();
const controller = new controller_1.RolesController();
router.get('/', (0, catcher_1.catcher)(controller.getRoles));
router.post('/save', (0, catcher_1.catcher)(controller.saveRoles));
router.patch('/update/:id', (0, catcher_1.catcher)(controller.updateRoles));
router.delete('/delete/:id', (0, catcher_1.catcher)(controller.deleteRoles));
exports.default = router;
//# sourceMappingURL=routes.js.map