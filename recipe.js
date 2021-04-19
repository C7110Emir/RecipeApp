"use strict";
exports.__esModule = true;
var data = require("./api.json");
function api() {
    for (var x in data) {
        console.log(data[x][0].name);
    }
}
api();
var mainsalads = document.getElementById('content');
;
var maindesserts = document.getElementById('dessertsbutton');
var mainsoups = document.getElementById("soupsbutton");
mainsalads.addEventListener("click", saladcategoryclick);
maindesserts.addEventListener("click", dessertcategoryclick);
mainsoups.addEventListener("click", soupscategoryclick);
function saladcategoryclick() {
    document.getElementById('firstcontentimage').src = data['salads'][0].image1;
}
function dessertcategoryclick() {
}
function soupscategoryclick() {
}
