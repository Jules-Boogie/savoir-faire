import axios from "axios";

const recipeURL = "https://api.spoonacular.com/food/wine/pairing?food=";
const ApiKey = "adc4087bb3b24cd0a80921266417fa4f";



const mealURL = "https://api.spoonacular.com/mealplanner/generate?timeFrame=week";
const wineComparisonURL = "https://api.spoonacular.com/food/wine/recommendation?wine=";


// salmon


export default {

    searchWine: function(queryParams){
        return axios.get(recipeURL + queryParams + "&apiKey=" + ApiKey);
    },
    renderMeal: function(cal, exclude, diet){
        return axios.get(mealURL + "&targetCalories=" + cal + "&exclude=" + exclude + "&diet=" + diet + "&apiKey=" + ApiKey);
    },

    wineComparison: function(queryParams){
        return axios.get(wineComparisonURL + queryParams +"&number=20" + "&apiKey=" + ApiKey);
    }
};