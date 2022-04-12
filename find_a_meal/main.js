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
            document.querySelector("h2").innerText = meal.strMeal
            document.querySelector("#info").innerHTML = `
                <p>Cuisine: ${meal.strArea}</p>
                <p>Category: ${meal.strCategory}</p>
                <p><a href="${meal.strSource}">Source</a></p>
                `
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}