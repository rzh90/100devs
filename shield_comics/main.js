fetch("https://gateway.marvel.com/v1/public/series/20607/comics?noVariants=true&ts=1&apikey=da494252a9e2137eeefe8855ddaf95e1&hash=8044c4979335104169fecfdccaca9811")
    .then(res => res.json())
    .then(apiData => {
        console.log(apiData.data.results)
        
        const comicInfo = apiData.data.results

        for (let i = comicInfo.length - 1; i >= 0; i--) {
            document.querySelector(".comics").innerHTML += 
            `<section class="comic_info">
                <a href="${comicInfo[i].urls[0].url}"><img src="${comicInfo[i].thumbnail.path}.${comicInfo[i].thumbnail.extension}"></a>
                <h2>${comicInfo[i].title}</h2>
            </section>`
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })