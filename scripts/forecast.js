class Forecast {
    constructor() {
        this.baseWeather = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.baseCity = 'http://dataservice.accuweather.com/locations/v1/cities/search'
        this.key = 'F5RMMBmtxVA7CduMa80tIWmzJFwDNbDJ'
    }

    async updateCity (city) {

        // getCity is a synchronous function
        // resolve and await to passe result to cityDets
        const cityDets = await this.getCity(city)
    
        // getWeather is a synchronous function too
        const weather = await this.getWeather(cityDets.Key)
    
        //return {
        //    cityDets: cityDets,
        //    weather: weather
        //}
    
        // Object Shorthand Notation
        return { cityDets, weather } 
    
    }

    async getWeather(id) {
        //const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
        const query = `${id}?apikey=${this.key}`

        const response = await fetch(this.baseWeather + query)
        if (response.status !== 200) {
            throw new Error('Cannot fetch the data')
        }
        const data = await response.json()
        //console.log(data[0])
        return data[0]
    }

    async getCity(city) {
        //const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
        const query = `?apikey=${this.key}&q=${city}`

        // await promise to be resolve
        const response = await fetch(this.baseCity + query)

        if(response.status !== 200) {
            throw new Error('Cannot fetch the data')
        }
        // response.json return a promise
        const data = await response.json()
        //console.log(data[0])
        return data[0]
    }
}

/**
 getCity('london')
    .then(data => {
        return getWeather(data.Key)
    }).then(data => console.log(data))
    .catch(err => console.log(err))

getWeather("45881")
 */