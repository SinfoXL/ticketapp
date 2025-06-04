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
exports.TicketCommentServices = void 0;
const data_access_1 = require("./data-access");
class TicketCommentServices {
    constructor() {
        this.getTicketComments = (_a) => __awaiter(this, [_a], void 0, function* ({ filters, pagination }) {
            return yield this.dataAccess.getTicketComments(filters, pagination);
        });
        this.saveTicketComments = (comments) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.saveTicketComments(comments);
        });
        this.updateTicketComment = (id, data) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.updateTicketComment(id, data);
        });
        this.deleteTicketComment = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.deleteTicketComment(id);
        });
        this.dataAccess = new data_access_1.TicketCommentDataAccess();
    }
}
exports.TicketCommentServices = TicketCommentServices;
//# sourceMappingURL=services.js.map