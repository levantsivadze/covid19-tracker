import axios from 'axios'

const apiUrl = 'https://corona-api.com/'

export const fetchCountries = async () => {
	let apiUrlCountries = `${apiUrl}countries`

	try {
		const {
			data: {data}
		} = await axios.get(apiUrlCountries)
		console.log(data)
		return data
	} catch (error) {
		console.log(error)
	}
}

export const fetchDailyData = async () => {
	const apiUrlGlobal = `${apiUrl}timeline`
	try {
		const {
			data: {data}
		} = await axios.get(apiUrlGlobal)
		const modifiedData = data.slice(0, 90).map((dailyData) => ({
			confirmed: dailyData.new_confirmed,
			deaths: dailyData.new_deaths,
			lastUpdate: dailyData.date
		}))

		return modifiedData
	} catch (error) {
		return error
	}
}

export const fetchData = async (countryCode) => {
	let changeableUrl = `${apiUrl}timeline`

	if (countryCode) {
		changeableUrl = `${apiUrl}/countries/${countryCode}`

		try {
			const {
				data: {data}
			} = await axios.get(changeableUrl)

			const modifiedData = {
				confirmed: data.latest_data.confirmed,
				recovered: data.latest_data.recovered,
				deaths: data.latest_data.deaths,
				country: data.name,
				lastUpdate: data.updated_at
			}

			return modifiedData
		} catch (error) {
			return error
		}
	} else {
		try {
			const {
				data: {data}
			} = await axios.get(changeableUrl)

			const modifiedData = {
				confirmed: data[0].confirmed,
				recovered: data[0].confirmed - data[0].deaths,
				deaths: data[0].deaths,
				lastUpdate: data[0].updated_at
			}

			return modifiedData
		} catch (error) {
			return error
		}
	}
}
