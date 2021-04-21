import data from "./api.js";

if (sessionStorage.clickvalue == 1){
    //first content
    (document.getElementById("firstcontentimage") as HTMLImageElement).src = data["salads"][0].image1;
    (document.getElementById("firstcontenttitle")as HTMLElement).innerHTML = data["salads"][0].name;
    (document.getElementById("firstcarddescription") as HTMLElement).innerHTML = data["salads"][0].description;
    (document.getElementById("firstcardbottom") as HTMLElement).innerHTML = data["salads"][0].preptime;
    //second content
    (document.getElementById("secondcontentimage") as HTMLImageElement).src = data["salads"][1].image1;
    (document.getElementById("secondcontenttitle")as HTMLElement).innerHTML = data["salads"][1].name;
    (document.getElementById("secondcarddescription") as HTMLElement).innerHTML = data["salads"][1].description;
    (document.getElementById("secondcardbottom") as HTMLElement).innerHTML = data["salads"][1].preptime;
    //third content
    (document.getElementById("thirdcontentimage") as HTMLImageElement).src = data["salads"][2].image1;
    (document.getElementById("thirdcontenttitle")as HTMLElement).innerHTML = data["salads"][2].name;
    (document.getElementById("thirdcarddescription") as HTMLElement).innerHTML = data["salads"][2].description;
    (document.getElementById("thirdcardbottom") as HTMLElement).innerHTML = data["salads"][2].preptime;
}
else if(sessionStorage.clickvalue == 2){
    (document.getElementById("firstcontentimage") as HTMLImageElement).src = data["desserts"][0].image1;
    (document.getElementById("firstcontenttitle") as HTMLElement).innerHTML = data["desserts"][0].name;
    (document.getElementById("firstcarddescription") as HTMLElement).innerHTML = data["desserts"][0].description;
    (document.getElementById("firstcardbottom") as HTMLElement).innerHTML = data["desserts"][0].preptime;
    //second content
    (document.getElementById("secondcontentimage")as HTMLImageElement).src = data["desserts"][1].image1;
    (document.getElementById("secondcontenttitle") as HTMLElement).innerHTML = data["desserts"][1].name;
    (document.getElementById("secondcarddescription") as HTMLElement).innerHTML = data["desserts"][1].description;
    (document.getElementById("secondcardbottom") as HTMLElement).innerHTML = data["desserts"][1].preptime;
    //third content
    (document.getElementById("thirdcontentimage") as HTMLImageElement).src = data["desserts"][2].image1;
    (document.getElementById("thirdcontenttitle") as HTMLElement).innerHTML = data["desserts"][2].name;
    (document.getElementById("thirdcarddescription") as HTMLElement).innerHTML = data["desserts"][2].description;
    (document.getElementById("thirdcardbottom") as HTMLElement).innerHTML = data["desserts"][2].preptime;
}
else if(sessionStorage.clickvalue == 3){
    (document.getElementById("firstcontentimage") as HTMLImageElement).src = data["soups"][0].image1;
    (document.getElementById("firstcontenttitle") as HTMLElement).innerHTML = data["soups"][0].name;
    (document.getElementById("firstcarddescription") as HTMLElement).innerHTML = data["soups"][0].description;
    (document.getElementById("firstcardbottom") as HTMLElement).innerHTML = data["soups"][0].preptime;
    //second content
    (document.getElementById("secondcontentimage")as HTMLImageElement).src = data["soups"][1].image1;
    (document.getElementById("secondcontenttitle") as HTMLElement).innerHTML = data["soups"][1].name;
    (document.getElementById("secondcarddescription") as HTMLElement).innerHTML = data["soups"][1].description;
    (document.getElementById("secondcardbottom") as HTMLElement).innerHTML = data["soups"][1].preptime;
    //third content
    (document.getElementById("thirdcontentimage") as HTMLImageElement).src = data["soups"][2].image1;
    (document.getElementById("thirdcontenttitle") as HTMLElement).innerHTML = data["soups"][2].name;
    (document.getElementById("thirdcarddescription") as HTMLElement).innerHTML = data["soups"][2].description;
    (document.getElementById("thirdcardbottom") as HTMLElement).innerHTML = data["soups"][2].preptime;
}



const firstcnt = document.getElementById('firstcontent')
const secondcnt = document.getElementById("secondcontent")
const thirdcnt = document.getElementById("thirdcontent")


firstcnt.addEventListener("click",firstcontentclick)
secondcnt.addEventListener("click",secondcontentclick)
thirdcnt.addEventListener("click",thirdcontentclick)


function firstcontentclick(){
    window.sessionStorage.setItem("contentclick","1")
    window.location.href = "specificcontent.html"
}
function secondcontentclick(){
    window.sessionStorage.setItem("contentclick","2")
    window.location.href = "specificcontent.html"
}
function thirdcontentclick(){
    window.sessionStorage.setItem("contentclick","3")
    window.location.href = "specificcontent.html"
}