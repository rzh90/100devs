fetch("https://gateway.marvel.com/v1/public/series/20607?ts=1&apikey=da494252a9e2137eeefe8855ddaf95e1&hash=8044c4979335104169fecfdccaca9811")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })