import * as data from "./api.json";
var mainsalads = document.getElementById('saladsbutton');
var maindesserts = document.getElementById('dessertsbutton');
var mainsoups = document.getElementById("soupsbutton");
mainsalads.addEventListener("click", saladcategoryclick);
maindesserts.addEventListener("click", dessertcategoryclick);
mainsoups.addEventListener("click", soupscategoryclick);
function saladcategoryclick() {
    document.getElementById('firstcontentimage').src = data['salads'][0].image1;
}
;
function dessertcategoryclick() {
}
;
function soupscategoryclick() {
}
;
