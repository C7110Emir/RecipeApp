import * as data from "./api.json"
function api(){
    for(let x in data){
        console.log(data[x][0].name)
    }
}
api()



const mainsalads: HTMLElement = document.getElementById('content');;
const maindesserts = document.getElementById('dessertsbutton');
const mainsoups = document.getElementById("soupsbutton");

mainsalads.addEventListener("click",saladcategoryclick)
maindesserts.addEventListener("click",dessertcategoryclick)
mainsoups.addEventListener("click",soupscategoryclick)





function saladcategoryclick(){
    (document.getElementById('firstcontentimage') as HTMLImageElement).src = data['salads'][0].image1;
}

function dessertcategoryclick(){

}

function soupscategoryclick(){

}

