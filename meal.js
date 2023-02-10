const LoadMeals = (search) => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => DisplayMeals(data.meals))
}



const DisplayMeals = meals => {
    //console.log(meals)
    const MealsContainer = document.getElementById('meals-container');
    MealsContainer.innerHTML= ``;
     meals.forEach(meal => {
        const MealsDiv = document.createElement('div');
        MealsDiv.classList.add('col');
        MealsDiv.innerHTML =`
        <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
                <div class="card-footer d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-danger" type="button">Order Now</button>
                </div>
              </div>
        
        `;
        MealsContainer.appendChild(MealsDiv)
        console.log(meal)
        
    });

};

const searchFood = () => {
    const searchField = document.getElementById('search-text');
    const SearchText = searchField.value;
    LoadMeals(SearchText);
    searchField.value='';

    console.log('searching')

}

//LoadMeals('fish');