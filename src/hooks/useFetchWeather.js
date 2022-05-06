import { useEffect, useState } from "react"

export default function useFetchWeather({location = 'paris', unit = 'metric', stateCode = '', countryCode=''}) {
    const [data, setData] = useState('')
    const [error, setError] = useState('')
    const [lon, setLon] = useState('');
    const [lat, setLat] = useState('');
    const API_KEY = 'a62f19204db4271d56c8d5f2dc4c0dc3'
    const geocodeurl = `http://api.openweathermap.org/geo/1.0/direct?q=${location},${stateCode},${countryCode}&limit=1&appid=${API_KEY}`
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_KEY}`

    useEffect(() => {
        (async function() {
            try {
                const response = await fetch(geocodeurl)
                const data = await response.json()
                setLon(data[0].lon)
                setLat(data[0].lat)
            } catch (error) {
                setError(error)
            }
        })()
    }, [geocodeurl]);

    console.log(lon,lat)
    
    useEffect(() => {
        (async function(){
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
                console.log(data)
            } catch (error) {
                setError(error)
            }
        }) ()
    }, [url])
    console.log(unit, url)

    return {data, error}  
}
// https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_KEY}
// https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=${API_KEY}