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
exports.TicketHistoryServices = void 0;
const data_access_1 = require("./data-access");
class TicketHistoryServices {
    constructor() {
        this.getTicketHistories = (_a) => __awaiter(this, [_a], void 0, function* ({ filters, pagination }) {
            return yield this.dataAccess.getTicketHistories(filters, pagination);
        });
        this.saveTicketHistories = (histories) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.saveTicketHistories(histories);
        });
        this.updateTicketHistory = (id, data) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.updateTicketHistory(id, data);
        });
        this.deleteTicketHistory = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.dataAccess.deleteTicketHistory(id);
        });
        this.dataAccess = new data_access_1.TicketHistoryDataAccess();
    }
}
exports.TicketHistoryServices = TicketHistoryServices;
//# sourceMappingURL=services.js.map