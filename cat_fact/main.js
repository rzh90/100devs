document.querySelector(".fact_button").addEventListener("click", getCatFact)

function getCatFact() {
    //Get cat image
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(apiData => {
            console.log(apiData[0].url)
            document.querySelector("img").src = apiData[0].url
        })
        .catch(err => {
            console.log(`error ${err}`)
        })

    //Get cat fact
    fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1")
        .then(res => res.json())
        .then(apiData2 => {
            console.log(apiData2.text)
            document.querySelector(".fact").innerText = apiData2.text
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}