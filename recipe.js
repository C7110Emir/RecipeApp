"use strict";
exports.__esModule = true;
var data = require("./api.json");
function api() {
    for (var x in data) {
        console.log(data[x][0].name);
    }
}
api();
