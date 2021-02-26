"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const fluent_json_schema_1 = __importDefault(require("fluent-json-schema"));
const GET = async function () {
    return { hello: "world" };
};
exports.GET = GET;
exports.GET.opts = {
    schema: {
        response: {
            200: fluent_json_schema_1.default.object().prop("hello", fluent_json_schema_1.default.string().required()),
        },
    },
};
//# sourceMappingURL=index.js.map