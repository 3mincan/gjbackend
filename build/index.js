"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.createServer = void 0;
const path_1 = __importDefault(require("path"));
const fastify_1 = __importDefault(require("fastify"));
const fastify_now_1 = __importDefault(require("fastify-now"));
// Load env vars
const config_1 = __importDefault(require("./lib/config"));
config_1.default();
async function createServer() {
    const server = fastify_1.default({
        logger: {
            level: process.env.LOG_LEVEL,
        },
    });
    server.register(fastify_now_1.default, {
        routesFolder: path_1.default.join(__dirname, "./routes"),
    });
    await server.ready();
    return server;
}
exports.createServer = createServer;
async function startServer() {
    process.on("unhandledRejection", (err) => {
        console.error(err);
        process.exit(1);
    });
    const server = await createServer();
    await server.listen(+process.env.API_PORT, process.env.API_HOST);
    if (process.env.NODE_ENV === "production") {
        for (const signal of ["SIGINT", "SIGTERM"]) {
            process.on(signal, () => server.close().then((err) => {
                console.log(`close application on ${signal}`);
                process.exit(err ? 1 : 0);
            }));
        }
    }
}
exports.startServer = startServer;
if (process.env.NODE_ENV !== "test") {
    startServer();
}
//# sourceMappingURL=index.js.map