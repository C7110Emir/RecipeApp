import data from "./api.js";
var mainsalads = document.getElementById('saladsbutton');
var maindesserts = document.getElementById('dessertsbutton');
var mainsoups = document.getElementById("soupsbutton");
var firstcontentimg = document.getElementById("firstcontentimage");
mainsalads.addEventListener("click", saladcategoryclick);
function saladcategoryclick() {
    window.location.href = "categorycontent.html";
    console.log("haha");
    document.getElementById("firstcontenttitle").innerHTML = data['salads'][0].name;
}
;
function dessertcategoryclick() {
}
;
function soupscategoryclick() {
}
;
