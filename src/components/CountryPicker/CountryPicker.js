import React, {useState, useEffect} from 'react'
import {NativeSelect, Select, MenuItem, FormControl} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../api'

function CountryPicker(props) {
	const [fetchedCountries, setFetchedCountries] = useState([])

	useEffect(() => {
		const fetchAPI = async () => {
			const countries = await fetchCountries()
			setFetchedCountries(countries)
		}
		fetchAPI()
	}, [setFetchedCountries])

	const countryChangeHandler = (e) => {
		props.onCountryChange(e.target.value)
	}

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue='' onChange={countryChangeHandler}>
				<option value=''>Global</option>
				{fetchedCountries.map((country) => (
					<option value={country.code} key={country.code}>
						{country.name}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	)
}

export default CountryPicker
