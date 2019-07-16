const key = 'F5RMMBmtxVA7CduMa80tIWmzJFwDNbDJ'

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
    return data[0]

}

getCity('são paulo')
    .then(data => console.log(data))
    .catch(err => console.log(err))