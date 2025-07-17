const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const recipeResults = document.getElementById("recipe-results");


function displayRecipes(meals) {
    recipeResults.innerHTML = '';

    if (!meals) {
        recipeResults.innerHTML = '<p>No recipes found. Please try another search term.</p>';
        return;
    }

    meals.forEach(meal => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <a href="https://www.themealdb.com/meal/${meal.idMeal}" target="_blank">View Recipe</a>
        `;
        
       
        recipeResults.appendChild(recipeCard);
    });
}


async function searchRecipes(e) {
    e.preventDefault();
    const searchItem = searchInput.value.trim();

    if (searchItem === "") {
        alert('please search an item');
        return;
    }

    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        
        displayRecipes(data.meals);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

searchForm.addEventListener('submit', searchRecipes);