import data from "./api.js";
console.log(data);
window.sessionStorage.setItem("clickvalue", "0");
console.log(sessionStorage);
var saladbutton = document.getElementById("saladsbutton");
var dessertbutton = document.getElementById("dessertsbutton");
var soupbutton = document.getElementById("soupsbutton");
saladbutton.addEventListener("click", saladclick);
dessertbutton.addEventListener("click", dessertclick);
soupbutton.addEventListener("click", soupclick);
function saladclick() {
    window.sessionStorage.setItem("clickvalue", "1");
    window.location.href = "categorycontent.html";
}
function dessertclick() {
    window.sessionStorage.setItem("clickvalue", "2");
    window.location.href = "categorycontent.html";
}
function soupclick() {
    window.sessionStorage.setItem("clickvalue", "3");
    window.location.href = "categorycontent.html";
}
