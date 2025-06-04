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
exports.TicketCommentController = void 0;
const responses_1 = require("../../helpers/responses");
const services_1 = require("./services");
const request_utils_1 = require("../../utils/request-utils");
class TicketCommentController {
    constructor() {
        this.getTicketComments = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'ticketId', 'userId']);
            const comments = yield this.service.getTicketComments({ filters, pagination });
            if (!comments)
                (0, responses_1.NotFound)(res, 'Ticket comments not found');
            (0, responses_1.Ok)(res, comments);
        });
        this.saveTicketComments = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const commentsSaved = yield this.service.saveTicketComments(body);
            (0, responses_1.Created)(res, commentsSaved);
        });
        this.updateTicketComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const id = req.params.id;
            const commentUpdated = yield this.service.updateTicketComment(id, data);
            if (!commentUpdated)
                (0, responses_1.NotFound)(res, 'Ticket comment not found');
            (0, responses_1.Ok)(res, commentUpdated);
        });
        this.deleteTicketComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.service.deleteTicketComment(id);
            (0, responses_1.Ok)(res, id);
        });
        this.service = new services_1.TicketCommentServices();
    }
}
exports.TicketCommentController = TicketCommentController;
//# sourceMappingURL=controller.js.map