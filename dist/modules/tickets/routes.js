"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const catcher_1 = require("../../helpers/catcher");
const router = (0, express_1.Router)();
const controller = new controller_1.TicketsController();
router.get('/', (0, catcher_1.catcher)(controller.getTickets));
router.post('/save', (0, catcher_1.catcher)(controller.saveTickets));
router.patch('/update/:id', (0, catcher_1.catcher)(controller.updateTicket));
router.delete('/delete/:id', (0, catcher_1.catcher)(controller.deleteTicket));
exports.default = router;
//# sourceMappingURL=routes.js.map