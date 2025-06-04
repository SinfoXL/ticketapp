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
exports.TicketStatusController = void 0;
const responses_1 = require("../../helpers/responses");
const services_1 = require("./services");
const request_utils_1 = require("../../utils/request-utils");
class TicketStatusController {
    constructor() {
        this.getTicketStatuses = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'name']);
            const statuses = yield this.service.getTicketStatuses({ filters, pagination });
            if (!statuses)
                (0, responses_1.NotFound)(res, 'Ticket statuses not found');
            (0, responses_1.Ok)(res, statuses);
        });
        this.saveTicketStatuses = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const statusesSaved = yield this.service.saveTicketStatuses(body);
            (0, responses_1.Created)(res, statusesSaved);
        });
        this.updateTicketStatus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const id = parseInt(req.params.id, 10);
            const statusUpdated = yield this.service.updateTicketStatus(id, data);
            if (!statusUpdated)
                (0, responses_1.NotFound)(res, 'Ticket status not found');
            (0, responses_1.Ok)(res, statusUpdated);
        });
        this.deleteTicketStatus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            yield this.service.deleteTicketStatus(id);
            (0, responses_1.Ok)(res, id);
        });
        this.service = new services_1.TicketStatusServices();
    }
}
exports.TicketStatusController = TicketStatusController;
//# sourceMappingURL=controller.js.map