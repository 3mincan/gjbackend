"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("GET /", () => {
    let server;
    beforeAll(async () => {
        server = await index_1.createServer();
    });
    afterAll(async () => {
        await server.close();
    });
    it("Should return hello world", async () => {
        const response = await server.inject({
            method: "GET",
            path: "/",
        });
        expect(response.statusCode).toBe(200);
        expect(response.json()).toEqual({ hello: "world" });
    });
});
//# sourceMappingURL=index.spec.js.map