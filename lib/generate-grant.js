"use strict";
function generateGrant(apiList) {
    return apiList.map(function (api) {
        return "// @grant " + api;
    }).join("\n");
}
module.exports = generateGrant;