import axios from "axios";

const recipeURL = "https://api.spoonacular.com/food/wine/pairing?food=";
const ApiKey = "adc4087bb3b24cd0a80921266417fa4f";



const mealURL = "https://api.spoonacular.com/mealplanner/generate?timeFrame=week";
const wineComparisonURL = "https://api.spoonacular.com/food/wine/recommendation?wine=";

const newsURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="

 const newsApiKey = "7zsh2gUE5C5PSB9JlqxxeVkQCOEKDsLG"


// salmon

const filter1 = '&fq=news_desk:("Fashion & Style" "Health & Fitness" "Health" "Magazine" "Workplace" "Working")'


export default {

    searchWine: function(queryParams){
        return axios.get(recipeURL + queryParams + "&apiKey=" + ApiKey);
    },
    renderMeal: function(cal, exclude, diet){
        return axios.get(mealURL + "&targetCalories=" + cal + "&exclude=" + exclude + "&diet=" + diet + "&apiKey=" + ApiKey);
    },

    wineComparison: function(queryParams){
        return axios.get(wineComparisonURL + queryParams +"&number=20" + "&apiKey=" + ApiKey);
    }, 
    newsRender: function(queryParams){
        return axios.get(newsURL + queryParams + filter1 + "&api-key=" + newsApiKey)
    }
};