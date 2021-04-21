import data from "./api.js";
if (sessionStorage.clickvalue == 1) {
    //first content
    document.getElementById("firstcontentimage").src = data["salads"][0].image1;
    document.getElementById("firstcontenttitle").innerHTML = data["salads"][0].name;
    document.getElementById("firstcarddescription").innerHTML = data["salads"][0].description;
    document.getElementById("firstcardbottom").innerHTML = data["salads"][0].preptime;
    //second content
    document.getElementById("secondcontentimage").src = data["salads"][1].image1;
    document.getElementById("secondcontenttitle").innerHTML = data["salads"][1].name;
    document.getElementById("secondcarddescription").innerHTML = data["salads"][1].description;
    document.getElementById("secondcardbottom").innerHTML = data["salads"][1].preptime;
    //third content
    document.getElementById("thirdcontentimage").src = data["salads"][2].image1;
    document.getElementById("thirdcontenttitle").innerHTML = data["salads"][2].name;
    document.getElementById("thirdcarddescription").innerHTML = data["salads"][2].description;
    document.getElementById("thirdcardbottom").innerHTML = data["salads"][2].preptime;
}
else if (sessionStorage.clickvalue == 2) {
    document.getElementById("firstcontentimage").src = data["desserts"][0].image1;
    document.getElementById("firstcontenttitle").innerHTML = data["desserts"][0].name;
    document.getElementById("firstcarddescription").innerHTML = data["desserts"][0].description;
    document.getElementById("firstcardbottom").innerHTML = data["desserts"][0].preptime;
    //second content
    document.getElementById("secondcontentimage").src = data["desserts"][1].image1;
    document.getElementById("secondcontenttitle").innerHTML = data["desserts"][1].name;
    document.getElementById("secondcarddescription").innerHTML = data["desserts"][1].description;
    document.getElementById("secondcardbottom").innerHTML = data["desserts"][1].preptime;
    //third content
    document.getElementById("thirdcontentimage").src = data["desserts"][2].image1;
    document.getElementById("thirdcontenttitle").innerHTML = data["desserts"][2].name;
    document.getElementById("thirdcarddescription").innerHTML = data["desserts"][2].description;
    document.getElementById("thirdcardbottom").innerHTML = data["desserts"][2].preptime;
}
else if (sessionStorage.clickvalue == 3) {
    document.getElementById("firstcontentimage").src = data["soups"][0].image1;
    document.getElementById("firstcontenttitle").innerHTML = data["soups"][0].name;
    document.getElementById("firstcarddescription").innerHTML = data["soups"][0].description;
    document.getElementById("firstcardbottom").innerHTML = data["soups"][0].preptime;
    //second content
    document.getElementById("secondcontentimage").src = data["soups"][1].image1;
    document.getElementById("secondcontenttitle").innerHTML = data["soups"][1].name;
    document.getElementById("secondcarddescription").innerHTML = data["soups"][1].description;
    document.getElementById("secondcardbottom").innerHTML = data["soups"][1].preptime;
    //third content
    document.getElementById("thirdcontentimage").src = data["soups"][2].image1;
    document.getElementById("thirdcontenttitle").innerHTML = data["soups"][2].name;
    document.getElementById("thirdcarddescription").innerHTML = data["soups"][2].description;
    document.getElementById("thirdcardbottom").innerHTML = data["soups"][2].preptime;
}
var firstcnt = document.getElementById('firstcontent');
var secondcnt = document.getElementById("secondcontent");
var thirdcnt = document.getElementById("thirdcontent");
firstcnt.addEventListener("click", firstcontentclick);
secondcnt.addEventListener("click", secondcontentclick);
thirdcnt.addEventListener("click", thirdcontentclick);
function firstcontentclick() {
    window.sessionStorage.setItem("contentclick", "1");
    window.location.href = "specificcontent.html";
}
function secondcontentclick() {
    window.sessionStorage.setItem("contentclick", "2");
    window.location.href = "specificcontent.html";
}
function thirdcontentclick() {
    window.sessionStorage.setItem("contentclick", "3");
    window.location.href = "specificcontent.html";
}
