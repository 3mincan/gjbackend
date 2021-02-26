"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("Server", () => {
    it("Should return server instance", async () => {
        const server = await index_1.createServer();
        expect(server).toBeDefined();
        await server.close();
    });
});
//# sourceMappingURL=index.spec.js.map