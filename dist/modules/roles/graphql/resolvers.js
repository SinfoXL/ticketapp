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
exports.roleResolvers = void 0;
const services_1 = require("../services");
const services = new services_1.RolesServices();
exports.roleResolvers = {
    Query: {
        getRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return services.getRoles({
                filters: args.filters,
                pagination: args.pagination,
            });
        }),
    },
    Mutation: {
        saveRoles: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return services.saveRoles(args.roles);
        }),
        updateRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return services.updateRole(args.id, args.data.name);
        }),
        deleteRole: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield services.deleteRole(args.id);
            return true;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map