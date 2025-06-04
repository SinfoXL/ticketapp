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
exports.TicketAttachmentDataAccess = void 0;
const instance_1 = require("../../database/instance");
const where_clause_1 = require("../../helpers/where-clause");
class TicketAttachmentDataAccess {
    constructor() {
        this.getTicketAttachments = (...args_1) => __awaiter(this, [...args_1], void 0, function* (filters = {}, pagination = {}) {
            const { page = 1, limit = 10 } = pagination;
            return yield this.db.ticketAttachment.findMany({
                where: (0, where_clause_1.buildWhereClause)(filters),
                take: limit,
                skip: (page - 1) * limit,
            });
        });
        this.saveTicketAttachments = (attachments) => __awaiter(this, void 0, void 0, function* () {
            return yield this.db.ticketAttachment.createManyAndReturn({
                data: attachments,
                skipDuplicates: true,
            });
        });
        this.updateTicketAttachment = (id, data) => __awaiter(this, void 0, void 0, function* () {
            return yield this.db.ticketAttachment.update({
                where: { id },
                data,
            });
        });
        this.deleteTicketAttachment = (id) => __awaiter(this, void 0, void 0, function* () {
            yield this.db.ticketAttachment.delete({
                where: { id },
            });
            return;
        });
        this.db = instance_1.Database.getInstance();
    }
}
exports.TicketAttachmentDataAccess = TicketAttachmentDataAccess;
//# sourceMappingURL=data-access.js.map