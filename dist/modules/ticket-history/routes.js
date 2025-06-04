"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const catcher_1 = require("../../helpers/catcher");
const router = (0, express_1.Router)();
const controller = new controller_1.TicketHistoryController();
router.get('/', (0, catcher_1.catcher)(controller.getTicketHistories));
router.post('/save', (0, catcher_1.catcher)(controller.saveTicketHistories));
router.patch('/update/:id', (0, catcher_1.catcher)(controller.updateTicketHistory));
router.delete('/delete/:id', (0, catcher_1.catcher)(controller.deleteTicketHistory));
exports.default = router;
//# sourceMappingURL=routes.js.map