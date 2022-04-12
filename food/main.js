document.querySelector(".btn").addEventListener("click", getMeal)

function getMeal() {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php"
    let mealName = document.querySelector("input[name='meal']").value

    fetch(`${url}?s=${mealName}`)
        .then(res => res.json())
        .then(apiData => {
            let meal = apiData.meals[0]
            console.log(meal)


            document.querySelector("img").src = meal.strMealThumb
            document.querySelector(".instructions").value = meal.strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}