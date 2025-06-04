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
exports.TicketHistoryController = void 0;
const responses_1 = require("../../helpers/responses");
const services_1 = require("./services");
const request_utils_1 = require("../../utils/request-utils");
class TicketHistoryController {
    constructor() {
        this.getTicketHistories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'ticketId', 'changedById', 'changeType']);
            const histories = yield this.service.getTicketHistories({ filters, pagination });
            if (!histories)
                (0, responses_1.NotFound)(res, 'Ticket histories not found');
            (0, responses_1.Ok)(res, histories);
        });
        this.saveTicketHistories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const historiesSaved = yield this.service.saveTicketHistories(body);
            (0, responses_1.Created)(res, historiesSaved);
        });
        this.updateTicketHistory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const id = req.params.id;
            const historyUpdated = yield this.service.updateTicketHistory(id, data);
            if (!historyUpdated)
                (0, responses_1.NotFound)(res, 'Ticket history not found');
            (0, responses_1.Ok)(res, historyUpdated);
        });
        this.deleteTicketHistory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.service.deleteTicketHistory(id);
            (0, responses_1.Ok)(res, id);
        });
        this.service = new services_1.TicketHistoryServices();
    }
}
exports.TicketHistoryController = TicketHistoryController;
//# sourceMappingURL=controller.js.map