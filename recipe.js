import data from "./api.js";
console.log(data);
var mainsalads = document.getElementById('saladsbutton');
var maindesserts = document.getElementById('dessertsbutton');
console.log(maindesserts);
var mainsoups = document.getElementById("soupsbutton");
console.log(mainsoups);
var firstcontentimg = document.getElementById("firstcontentimage");
mainsalads.addEventListener("click", saladcategoryclick);
console.log(data['salads'][0].image1);
function saladcategoryclick() {
    document.getElementById('firstcontentimage').src = "https://www.fifteenspatulas.com/wp-content/uploads/2011/10/Caesar-Salad-Fifteen-Spatulas-1-640x959.jpg";
}
;
function dessertcategoryclick() {
}
;
function soupscategoryclick() {
}
;
