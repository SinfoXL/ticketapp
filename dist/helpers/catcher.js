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
exports.catcher = void 0;
const responses_1 = require("./responses");
const catcher = (functionWrapped) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield functionWrapped(req, res, next);
        }
        catch (error) {
            console.error('Error:', error);
            (0, responses_1.InternalServerError)(res, error.message);
        }
    });
};
exports.catcher = catcher;
//# sourceMappingURL=catcher.js.map