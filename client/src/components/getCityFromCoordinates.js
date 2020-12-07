import React, { useEffect, useState } from 'react'
import axios from 'axios'


 
function  GetCityFromCoordinates () {
    
    const [city, setCity] = useState({
      city: ""
    });

    let latitude = 33.75019983540509
    let longitude =  -84.3780721324354
    let apiKey = 'AIzaSyDHy8QmVO1C4nSFZhTo9KZZ24Py0IuHrY4'
    let apiURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
    
    const getCity = async () => {
        const response = await axios.get(apiURL);
        const result = response.data
        console.log(result.results[0].address_components[3].long_name)
        setCity(result.results[0].address_components[3].long_name);
    }

    useEffect(() => {
        getCity()
    })
    
    return(
        <div>
            <h1>Test Component</h1>
            <h2>{city}</h2>
        </div>
    )
}

export default GetCityFromCoordinates