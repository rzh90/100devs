fetch("https://gateway.marvel.com/v1/public/series/20607/comics?noVariants=true&ts=1&apikey=da494252a9e2137eeefe8855ddaf95e1&hash=8044c4979335104169fecfdccaca9811")
    .then(res => res.json())
    .then(data => {
        console.log(data.data.results)
        
        for (let i = data.data.results.length - 1; i >= 0; i--) {
            document.querySelector(".comics").innerHTML += `<img src="${data.data.results[i].thumbnail.path}.${data.data.results[i].thumbnail.extension}">`
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })