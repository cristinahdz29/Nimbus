import React, { useEffect, useState } from 'react'
import axios from 'axios'


 
function  GetCityFromCoordinates () {
    
    const [city, setCity] = useState({
      city: ""
    });

    let latitude = 33.93466913794421;
    let longitude = -84.381074665022;
    let apiKey = 'AIzaSyDHy8QmVO1C4nSFZhTo9KZZ24Py0IuHrY4'
    let apiURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=locality&key=${apiKey}`;
    
    const getCity = async () => {
        const response = await axios.get(apiURL);
        const result = response.data
        console.log(result.results[0].formatted_address)
            //.results[0].address_components[3].long_name)
        
        
        setCity(result.results[0].address_components[3].long_name);
    }

    useEffect(() => {
        getCity()
    })
    
    return(
        <div>
            <h1>Test Component</h1>
            <h2>hi</h2>
        </div>
    )
}

// Sandy Springs Coordinates
// 33.751649691183076, -84.39383248335515;
// 33.93466913794421, -84.381074665022

// Glennville
// 31.940284662191612, -81.92454235966069

//Paris coordinates
// 48.859677617673164, 2.350486869835329

export default GetCityFromCoordinates