const Hapi = require("hapi");
const { expect } = require("code");
const {
    describe,
    it,
    after,
    before
} = exports.lab = require("lab").script();

describe("hapi-routify", () => {

    it("can set up a route", async () => {
        const result = {hello: "world"};

        const options = {
            routes: [{
                method: "GET",
                path: "/",
                handler: (request, h) => result
            }]
        };

        const server = new Hapi.server();
        await server.start();
        try {
            await server.register({plugin: require("../src/index.js"), options});
        } catch (err) {
            expect(error).to.not.exist();
        }

        const res = await server.inject('/');
        expect(res.result).to.equal(result)
    });

    it("doesn't setup any route, passing no arguments", async () => {
        const server = new Hapi.server();
        await server.start();

        try {
            await server.register(require("../src/index.js"));
        } catch (err) {
            expect(error).to.not.exist();
        }

        const res = await server.inject('/');
        expect(res.statusCode).to.equal(404);
    });
});
