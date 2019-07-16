const cityForm = document.querySelector('form')

const updateCity = async (city) => {

    // getCity is a synchronous function
    // resolve and await to passe result to cityDets
    const cityDets = await getCity(city)

    // getWeather is a synchronous function too
    const weather = await getWeather(cityDets.Key)

    return {
        cityDets: cityDets,
        weather: weather
    }

}

cityForm.addEventListener('submit', evt => {
    // prevent Default
    evt.preventDefault()

    const city = cityForm.city.value.trim()
    cityForm.reset() // clean input
    //console.log('cidade:',city)

    // update the ui with new city
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err))
})