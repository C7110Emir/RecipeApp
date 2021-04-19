import data from "./api.js"
console.log(data)
const mainsalads = document.getElementById('saladsbutton');
const maindesserts= document.getElementById('dessertsbutton');
console.log(maindesserts)
const mainsoups = document.getElementById("soupsbutton");
console.log(mainsoups)
const firstcontentimg = document.getElementById("firstcontentimage")

mainsalads.addEventListener("click",saladcategoryclick)


console.log(data['salads'][0].image1)




function saladcategoryclick(){
    (document.getElementById('firstcontentimage') as HTMLImageElement).src = "https://www.fifteenspatulas.com/wp-content/uploads/2011/10/Caesar-Salad-Fifteen-Spatulas-1-640x959.jpg";
};

function dessertcategoryclick(){

};

function soupscategoryclick(){

};

