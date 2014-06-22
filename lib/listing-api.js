"use strict";
var apiList = require("./Greasemonkey-API-list");
function listingAPI(code) {
    return apiList.filter(function (gmAPIName) {
        return code.indexOf(gmAPIName) !== -1;
    });
}
module.exports = listingAPI;