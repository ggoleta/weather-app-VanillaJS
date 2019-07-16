const key = 'F5RMMBmtxVA7CduMa80tIWmzJFwDNbDJ'

//get weather information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query)
    if (response.status !== 200) {
        throw new Error('Cannot fetch the data')
    }
    const data = await response.json()
    //console.log(data[0])
    return data[0]
}

// get city information
// all asynchronous function return a promise
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    // await promise to be resolve
    const response = await fetch(base + query)

    if(response.status !== 200) {
        throw new Error('Cannot fetch the data')
    }
    // response.json return a promise
    const data = await response.json()
    //console.log(data[0])
    return data[0]

}

/**
 getCity('london')
    .then(data => {
        return getWeather(data.Key)
    }).then(data => console.log(data))
    .catch(err => console.log(err))

getWeather("45881")
 */