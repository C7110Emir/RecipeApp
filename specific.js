import data from "./api.js";
if (sessionStorage.clickvalue == 1) {
    if (sessionStorage.contentclick == 1) {
        document.getElementById("carouselfirstimg").src = data["salads"][0].image1;
        document.getElementById("carouselsecondimg").src = data["salads"][0].image2;
        document.getElementById("carouselthirdimg").src = data["salads"][0].image3;
        document.getElementById("descriptioncard").innerHTML = data["salads"][0].description;
        document.getElementById("servingscard").innerHTML = data["salads"][0].Servings;
        document.getElementById("ingredientsbody").innerHTML = data["salads"][0].ingredients;
        document.getElementById("preperationbody").innerHTML = data["salads"][0].preparation;
    }
    if (sessionStorage.contentclick == 2) {
        document.getElementById("carouselfirstimg").src = data["salads"][1].image1;
        document.getElementById("carouselsecondimg").src = data["salads"][1].image2;
        document.getElementById("carouselthirdimg").src = data["salads"][1].image3;
        document.getElementById("descriptioncard").innerHTML = data["salads"][1].description;
        document.getElementById("servingscard").innerHTML = data["salads"][1].Servings;
        document.getElementById("ingredientsbody").innerHTML = data["salads"][1].ingredients;
        document.getElementById("preperationbody").innerHTML = data["salads"][1].preparation;
    }
    if (sessionStorage.contentclick == 3) {
        document.getElementById("carouselfirstimg").src = data["salads"][2].image1;
        document.getElementById("carouselsecondimg").src = data["salads"][2].image2;
        document.getElementById("carouselthirdimg").src = data["salads"][2].image3;
        document.getElementById("descriptioncard").innerHTML = data["salads"][2].description;
        document.getElementById("servingscard").innerHTML = data["salads"][2].Servings;
        document.getElementById("ingredientsbody").innerHTML = data["salads"][2].ingredients;
        document.getElementById("preperationbody").innerHTML = data["salads"][2].preparation;
    }
}
