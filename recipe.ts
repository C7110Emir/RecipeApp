import * as data from "./api.json"


const mainsalads: HTMLElement = document.getElementById('saladsbutton');
const maindesserts: HTMLElement = document.getElementById('dessertsbutton');
const mainsoups:HTMLElement = document.getElementById("soupsbutton");

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

