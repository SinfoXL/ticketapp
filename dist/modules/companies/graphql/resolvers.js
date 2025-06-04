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
exports.companyResolvers = void 0;
const services_1 = require("../services");
const companyServices = new services_1.CompaniesServices();
exports.companyResolvers = {
    Query: {
        getCompanies: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield companyServices.getCompanies(args);
        }),
    },
    Mutation: {
        createCompany: (_, data) => __awaiter(void 0, void 0, void 0, function* () {
            return yield companyServices.saveCompanies(data);
        }),
        updateCompany: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, data }) {
            return yield companyServices.updateCompany(id, data);
        }),
        deleteCompany: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            yield companyServices.deleteCompany(id);
            return true;
        }),
    },
    Company: {
        parent: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield companyServices.getCompanies(args);
        }),
    },
};
//# sourceMappingURL=resolvers.js.map