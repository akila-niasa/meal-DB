
const loadFish=()=>{
    const inputName=document.getElementById("input-field")
    const inputValue=inputName.value
    inputName.value=' '
    if(inputName.value==''){
        let error=document.getElementById("error-msg")
        error.textContent='please search a meal'
        error.style.color="red"
    }
    else{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeal(data.meals))
    }
}

const displayMeal=(meals)=>{
    const mealCard=document.getElementById("search-fish")
    mealCard.textContent=' '
    if(meals==null){
        let error=document.getElementById("error-msg")
        error.textContent="don't found any meal"
        error.style.color="red"
    }
    meals.forEach(meal => {
        const div=document.createElement('div')
    div.classList.add('col')
    div.innerHTML=` <div  class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,300)}</p>
      <button onclick="deleteElement(this)">delete</button>
      <button onclick="LoadMealDetail(${meal.idMeal})">see this</button>
    </div>
  </div>`
  mealCard.appendChild(div)
        
    });
}
const deleteElement=(e)=>{
  e.parentNode.parentNode.remove()
  document.getElementById("meal-detail").innerHTML=""
   
}


const LoadMealDetail=(mealId)=>{
    // console.log(mealId);
    const url=`https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>mealDetail(data.meals[0]))
}
const mealDetail=(meals)=>{
    const onMeal=document.getElementById("meal-detail")
    console.log(onMeal);
    const div=document.createElement("div")
    div.innerHTML=`<div class="card"">
    <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meals.strMeal}</h5>
      <p class="card-text">${meals.strInstructions.slice(0,150)}</p>
      <a href="${meals.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  onMeal.appendChild(div)
}