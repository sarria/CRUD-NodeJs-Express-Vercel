const axios = require('axios')
require('dotenv').config()

const getData = async (zip) => {
	try {
		const API_Key = process.env.WEATHER_APP_KEY;
		const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_Key}`;
	  	return await axios.get(url)
	} catch (error) {
		// console.error('getData :: ', error)
		return {message: 'error getting zip code data'}
	}
}

const coord = async (zip) => {
	let ret = {longitude:0,latitude:0,timezone:0} // default
	try {
		await getData(zip)
			.then(response => {
				if (response.data) {
					ret = {
						longitude: response.data.coord.lon, 
						latitude: response.data.coord.lat, 
						timezone: response.data.timezone
					}
				}
			})
			.catch(error => {
				console.log(error)
			})		
			
	} catch (error) {
		console.log(error)
	}	

	return ret
}

export default coord

