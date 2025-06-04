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
exports.TicketCategoryController = void 0;
const responses_1 = require("../../helpers/responses");
const services_1 = require("./services");
const request_utils_1 = require("../../utils/request-utils");
class TicketCategoryController {
    constructor() {
        this.getTicketCategories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pagination = (0, request_utils_1.extractPagination)(req.query);
            const filters = (0, request_utils_1.extractFilters)(req.query, ['id', 'name']);
            const categories = yield this.service.getTicketCategories({ filters, pagination });
            if (!categories)
                (0, responses_1.NotFound)(res, 'Ticket categories not found');
            (0, responses_1.Ok)(res, categories);
        });
        this.saveTicketCategories = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const categoriesSaved = yield this.service.saveTicketCategories(body);
            (0, responses_1.Created)(res, categoriesSaved);
        });
        this.updateTicketCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const id = parseInt(req.params.id, 10);
            const categoryUpdated = yield this.service.updateTicketCategory(id, data);
            if (!categoryUpdated)
                (0, responses_1.NotFound)(res, 'Ticket category not found');
            (0, responses_1.Ok)(res, categoryUpdated);
        });
        this.deleteTicketCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id, 10);
            yield this.service.deleteTicketCategory(id);
            (0, responses_1.Ok)(res, id);
        });
        this.service = new services_1.TicketCategoryServices();
    }
}
exports.TicketCategoryController = TicketCategoryController;
//# sourceMappingURL=controller.js.map