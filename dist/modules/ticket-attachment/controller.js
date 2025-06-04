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
exports.TicketAttachmentController = void 0;
const responses_1 = require("../../helpers/responses");
const services_1 = require("./services");
const request_utils_1 = require("../../utils/request-utils");
class TicketAttachmentController {
    constructor() {
        this.getTicketAttachments = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'ticketId', 'uploadedById']);
            const attachments = yield this.service.getTicketAttachments({ filters, pagination });
            if (!attachments)
                (0, responses_1.NotFound)(res, 'Ticket attachments not found');
            (0, responses_1.Ok)(res, attachments);
        });
        this.saveTicketAttachments = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const attachmentsSaved = yield this.service.saveTicketAttachments(body);
            (0, responses_1.Created)(res, attachmentsSaved);
        });
        this.updateTicketAttachment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const id = req.params.id;
            const attachmentUpdated = yield this.service.updateTicketAttachment(id, data);
            if (!attachmentUpdated)
                (0, responses_1.NotFound)(res, 'Ticket attachment not found');
            (0, responses_1.Ok)(res, attachmentUpdated);
        });
        this.deleteTicketAttachment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.service.deleteTicketAttachment(id);
            (0, responses_1.Ok)(res, id);
        });
        this.service = new services_1.TicketAttachmentServices();
    }
}
exports.TicketAttachmentController = TicketAttachmentController;
//# sourceMappingURL=controller.js.map