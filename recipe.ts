import data from "./api.js"
console.log(data)
const mainsalads = document.getElementById('saladsbutton');
const maindesserts= document.getElementById('dessertsbutton');
const mainsoups = document.getElementById("soupsbutton");

mainsalads.addEventListener("click",saladcategoryclick)
maindesserts.addEventListener("click",dessertcategoryclick)
mainsoups.addEventListener("click",soupscategoryclick)





function saladcategoryclick(){
    (document.getElementById('firstcontentimage') as HTMLImageElement).src = data['salads'][0].image1;
};

function dessertcategoryclick(){

};

function soupscategoryclick(){

};

