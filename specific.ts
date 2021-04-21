import data from "./api.js"

if(sessionStorage.clickvalue == 1){
    if(sessionStorage.contentclick == 1){
        (document.getElementById("carouselfirstimg") as HTMLImageElement).src = data["salads"][0].image1;
        (document.getElementById("carouselsecondimg") as HTMLImageElement).src = data["salads"][0].image2;
        (document.getElementById("carouselthirdimg") as HTMLImageElement).src = data["salads"][0].image3;
        (document.getElementById("descriptioncard") as HTMLElement).innerHTML = data["salads"][0].description;
        (document.getElementById("servingscard") as HTMLElement).innerHTML = data["salads"][0].Servings;
        (document.getElementById("ingredientsbody") as HTMLElement).innerHTML = data["salads"][0].ingredients;
        (document.getElementById("preperationbody") as HTMLElement).innerHTML = data["salads"][0].preparation
    }
    if(sessionStorage.contentclick == 2){
        (document.getElementById("carouselfirstimg") as HTMLImageElement).src = data["salads"][1].image1;
        (document.getElementById("carouselsecondimg") as HTMLImageElement).src = data["salads"][1].image2;
        (document.getElementById("carouselthirdimg") as HTMLImageElement).src = data["salads"][1].image3;
        (document.getElementById("descriptioncard") as HTMLElement).innerHTML = data["salads"][1].description;
        (document.getElementById("servingscard") as HTMLElement).innerHTML = data["salads"][1].Servings;
        (document.getElementById("ingredientsbody") as HTMLElement).innerHTML = data["salads"][1].ingredients;
        (document.getElementById("preperationbody") as HTMLElement).innerHTML = data["salads"][1].preparation
    }
    if(sessionStorage.contentclick == 3){
        (document.getElementById("carouselfirstimg") as HTMLImageElement).src = data["salads"][2].image1;
        (document.getElementById("carouselsecondimg") as HTMLImageElement).src = data["salads"][2].image2;
        (document.getElementById("carouselthirdimg") as HTMLImageElement).src = data["salads"][2].image3;
        (document.getElementById("descriptioncard") as HTMLElement).innerHTML = data["salads"][2].description;
        (document.getElementById("servingscard") as HTMLElement).innerHTML = data["salads"][2].Servings;
        (document.getElementById("ingredientsbody") as HTMLElement).innerHTML = data["salads"][2].ingredients;
        (document.getElementById("preperationbody") as HTMLElement).innerHTML = data["salads"][2].preparation
    }
}