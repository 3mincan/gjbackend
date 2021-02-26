"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const env_schema_1 = __importDefault(require("env-schema"));
const fluent_json_schema_1 = __importDefault(require("fluent-json-schema"));
function loadConfig() {
    const result = require("dotenv").config({
        path: path_1.default.join(__dirname, `../../${process.env.NODE_ENV ?? "development"}.env`),
    });
    if (result.error) {
        throw new Error(result.error);
    }
    env_schema_1.default({
        data: result.parsed,
        schema: fluent_json_schema_1.default.object()
            .prop("NODE_ENV", fluent_json_schema_1.default.string().enum(["development", "testing", "production"]).required())
            .prop("API_HOST", fluent_json_schema_1.default.string().required())
            .prop("API_PORT", fluent_json_schema_1.default.string().required()),
    });
}
exports.default = loadConfig;
//# sourceMappingURL=config.js.map