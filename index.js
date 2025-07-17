const search = document.getElementById("search-input");
const submit=document.getElementsByClassName("submit");
const search_result=document.querySelector("#recipe-results");

async function searchRecipes() {
     e.preventDefault();
     const searchItem= search.value.trim();

     if (searchItem ==""){
        alert('please search an item')
     }
}