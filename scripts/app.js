const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')

const updateUI = (data) => {
    const cityDets = data.cityDets
    const weather = data.weather

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;</span>
        </div>
    `

    // remove the d-none class if present
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}

const updateCity = async (city) => {

    // getCity is a synchronous function
    // resolve and await to passe result to cityDets
    const cityDets = await getCity(city)

    // getWeather is a synchronous function too
    const weather = await getWeather(cityDets.Key)

    //return {
    //    cityDets: cityDets,
    //    weather: weather
    //}

    // Object Shorthand Notation
    return { cityDets, weather } 

}

cityForm.addEventListener('submit', evt => {
    // prevent Default
    evt.preventDefault()

    const city = cityForm.city.value.trim()
    cityForm.reset() // clean input
    //console.log('cidade:',city)

    // update the ui with new city
    updateCity(city)
        .then(data => updateUI(data)) // pass info about the weather and city
        .catch(err => console.log(err))
})