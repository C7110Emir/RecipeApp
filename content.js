import data from "./api.js";
console.log(data);
if (sessionStorage.clickvalue == 1) {
    //first content
    document.getElementById("firstcontentimage").src = data["salads"][0].image1;
    document.getElementById("firstcontenttitle").innerHTML = data["salads"][0].name;
    document.getElementById("firstcarddescription").innerHTML = data["salads"][0].description;
    document.getElementById("firstcardbottom").innerHTML = data["salads"][0].preptime;
}
