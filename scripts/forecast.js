const key = 'F5RMMBmtxVA7CduMa80tIWmzJFwDNbDJ'

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)

    if(response.status !== 200) {
        throw new Error('cannot fetch the data')
    }

    const data = await response.json()

    return data[0]
}

getCity("rio de janeiro")
    .then(data => console.log(data))
    .catch(err => console.log(err))