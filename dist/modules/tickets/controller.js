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
exports.TicketsController = void 0;
const responses_1 = require("../../helpers/responses");
const services_1 = require("./services");
const request_utils_1 = require("../../utils/request-utils");
class TicketsController {
    constructor() {
        this.getTickets = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'title']);
            const tickets = yield this.service.getTickets({ filters, pagination });
            if (!tickets)
                (0, responses_1.NotFound)(res, 'Tickets not found');
            (0, responses_1.Ok)(res, tickets);
        });
        this.saveTickets = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const ticketsSaved = yield this.service.saveTickets(body);
            (0, responses_1.Created)(res, ticketsSaved);
        });
        this.updateTicket = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const id = req.params.id;
            const ticketUpdated = yield this.service.updateTicket(id, data);
            if (!ticketUpdated)
                (0, responses_1.NotFound)(res, 'Ticket not found');
            (0, responses_1.Ok)(res, ticketUpdated);
        });
        this.deleteTicket = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.service.deleteTicket(id);
            (0, responses_1.Ok)(res, id);
        });
        this.service = new services_1.TicketsServices();
    }
}
exports.TicketsController = TicketsController;
//# sourceMappingURL=controller.js.map