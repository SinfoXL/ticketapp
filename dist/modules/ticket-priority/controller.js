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
exports.TicketPriorityController = void 0;
const responses_1 = require("../../helpers/responses");
const services_1 = require("./services");
const request_utils_1 = require("../../utils/request-utils");
class TicketPriorityController {
    constructor() {
        this.getTicketPriorities = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'name']);
            const priorities = yield this.service.getTicketPriorities({ filters, pagination });
            if (!priorities)
                (0, responses_1.NotFound)(res, 'Ticket priorities not found');
            (0, responses_1.Ok)(res, priorities);
        });
        this.saveTicketPriorities = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const prioritiesSaved = yield this.service.saveTicketPriorities(body);
            (0, responses_1.Created)(res, prioritiesSaved);
        });
        this.updateTicketPriority = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const id = parseInt(req.params.id, 10);
            const priorityUpdated = yield this.service.updateTicketPriority(id, data);
            if (!priorityUpdated)
                (0, responses_1.NotFound)(res, 'Ticket priority not found');
            (0, responses_1.Ok)(res, priorityUpdated);
        });
        this.deleteTicketPriority = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            yield this.service.deleteTicketPriority(id);
            (0, responses_1.Ok)(res, id);
        });
        this.service = new services_1.TicketPriorityServices();
    }
}
exports.TicketPriorityController = TicketPriorityController;
//# sourceMappingURL=controller.js.map