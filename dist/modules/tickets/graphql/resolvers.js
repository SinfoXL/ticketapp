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
exports.ticketResolvers = void 0;
const services_1 = require("../services");
const services = new services_1.TicketsServices();
exports.ticketResolvers = {
    Query: {
        getTickets: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return services.getTickets({
                filters: args.filters,
                pagination: args.pagination,
            });
        }),
    },
    Mutation: {
        saveTickets: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return services.saveTickets(args.tickets);
        }),
        updateTicket: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return services.updateTicket(args.id, args.data);
        }),
        deleteTicket: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield services.deleteTicket(args.id);
            return true;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map