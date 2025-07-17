
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const search_result = document.querySelector("#recipe-results");


async function searchRecipes(e) {

    e.preventDefault();

    const searchItem = searchInput.value.trim();

    if (searchItem === "") {
        alert('please search an item');
        return;
    }

    search_result.innerHTML = '';
    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data.meals);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


searchForm.addEventListener('submit', searchRecipes);