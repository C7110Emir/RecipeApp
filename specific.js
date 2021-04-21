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
else if (sessionStorage.clickvalue == 2) {
    if (sessionStorage.contentclick == 1) {
        document.getElementById("carouselfirstimg").src = data["desserts"][0].image1;
        document.getElementById("carouselsecondimg").src = data["desserts"][0].image2;
        document.getElementById("carouselthirdimg").src = data["desserts"][0].image3;
        document.getElementById("descriptioncard").innerHTML = data["desserts"][0].description;
        document.getElementById("servingscard").innerHTML = data["desserts"][0].Servings;
        document.getElementById("ingredientsbody").innerHTML = data["desserts"][0].ingredients;
        document.getElementById("preperationbody").innerHTML = data["desserts"][0].preparation;
    }
    if (sessionStorage.contentclick == 2) {
        document.getElementById("carouselfirstimg").src = data["desserts"][1].image1;
        document.getElementById("carouselsecondimg").src = data["desserts"][1].image2;
        document.getElementById("carouselthirdimg").src = data["desserts"][1].image3;
        document.getElementById("descriptioncard").innerHTML = data["desserts"][1].description;
        document.getElementById("servingscard").innerHTML = data["desserts"][1].Servings;
        document.getElementById("ingredientsbody").innerHTML = data["desserts"][1].ingredients;
        document.getElementById("preperationbody").innerHTML = data["desserts"][1].preparation;
    }
    if (sessionStorage.contentclick == 3) {
        document.getElementById("carouselfirstimg").src = data["desserts"][2].image1;
        document.getElementById("carouselsecondimg").src = data["desserts"][2].image2;
        document.getElementById("carouselthirdimg").src = data["desserts"][2].image3;
        document.getElementById("descriptioncard").innerHTML = data["desserts"][2].description;
        document.getElementById("servingscard").innerHTML = data["desserts"][2].Servings;
        document.getElementById("ingredientsbody").innerHTML = data["desserts"][2].ingredients;
        document.getElementById("preperationbody").innerHTML = data["desserts"][2].preparation;
    }
}
else if (sessionStorage.clickvalue == 3) {
    if (sessionStorage.contentclick == 1) {
        document.getElementById("carouselfirstimg").src = data["soups"][0].image1;
        document.getElementById("carouselsecondimg").src = data["soups"][0].image2;
        document.getElementById("carouselthirdimg").src = data["soups"][0].image3;
        document.getElementById("descriptioncard").innerHTML = data["soups"][0].description;
        document.getElementById("servingscard").innerHTML = data["soups"][0].Servings;
        document.getElementById("ingredientsbody").innerHTML = data["soups"][0].ingredients;
        document.getElementById("preperationbody").innerHTML = data["soups"][0].preparation;
    }
    if (sessionStorage.contentclick == 2) {
        document.getElementById("carouselfirstimg").src = data["soups"][1].image1;
        document.getElementById("carouselsecondimg").src = data["soups"][1].image2;
        document.getElementById("carouselthirdimg").src = data["soups"][1].image3;
        document.getElementById("descriptioncard").innerHTML = data["soups"][1].description;
        document.getElementById("servingscard").innerHTML = data["soups"][1].Servings;
        document.getElementById("ingredientsbody").innerHTML = data["soups"][1].ingredients;
        document.getElementById("preperationbody").innerHTML = data["soups"][1].preparation;
    }
    if (sessionStorage.contentclick == 3) {
        document.getElementById("carouselfirstimg").src = data["soups"][2].image1;
        document.getElementById("carouselsecondimg").src = data["soups"][2].image2;
        document.getElementById("carouselthirdimg").src = data["soups"][2].image3;
        document.getElementById("descriptioncard").innerHTML = data["soups"][2].description;
        document.getElementById("servingscard").innerHTML = data["soups"][2].Servings;
        document.getElementById("ingredientsbody").innerHTML = data["soups"][2].ingredients;
        document.getElementById("preperationbody").innerHTML = data["soups"][2].preparation;
    }
}
