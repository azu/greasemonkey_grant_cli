"use strict";
var assert = require("power-assert");
var listingAPI = require("../lib/listing-api");
describe("listing-api", function () {
    context("when not contain any", function () {
        var code = "var a = 1;";
        it("should return []", function () {
            var list = listingAPI(code);
            assert(list.length === 0);
        });
    });
    context("when contain GM_log", function () {
        var code = "GM_log('test')";
        it("should return GM_log", function () {
            var list = listingAPI(code);
            assert.deepEqual(list, ["GM_log"]);
        });
    });
    context("when contain GM_*", function () {
        var apiList = require("../lib/Greasemonkey-API-list");
        var code = apiList.join("\n");
        it("should return [...]", function () {
            var list = listingAPI(code);
            assert(list.length === apiList.length);
        });
    });
});