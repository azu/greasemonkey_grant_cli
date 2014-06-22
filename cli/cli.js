#!/usr/bin/env node

"use strict";
var fs = require("fs");
var path = require("path");
var files = process.argv.slice(2);
if (files.length === 0) {
    throw new Error("usage: greasemonkey-grant file.js");
}

files.forEach(function (filePath) {
    var code = fs.readFileSync(path.resolve(process.cwd, filePath), "utf-8");
    var usedAPIList = require("../lib/listing-api")(code);
    var output = require("../lib/generate-grant")(usedAPIList);
    if (output != null) {
        process.stdout.write(output);
    }
});
