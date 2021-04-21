import data from "./api.js";
console.log(data)

if (sessionStorage.clickvalue == 1){
    //first content
    (document.getElementById("firstcontentimage") as HTMLImageElement).src = data["salads"][0].image1;
    (document.getElementById("firstcontenttitle")as HTMLElement).innerHTML = data["salads"][0].name;
    (document.getElementById("firstcarddescription") as HTMLElement).innerHTML = data["salads"][0].description;
    (document.getElementById("firstcardbottom") as HTMLElement).innerHTML = data["salads"][0].preptime;
}