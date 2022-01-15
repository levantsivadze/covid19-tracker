import React from 'react'
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './components/api'

class App extends React.Component {
	state = {
		data: {},
		countryCode: ''
	}

	async componentDidMount() {
		const fetchedData = await fetchData()
		console.log(fetchedData)
		this.setState({data: fetchedData})
	}

	handleCountryChange = async (countryCode) => {
		const fetchedData = await fetchData(countryCode)
		this.setState({data: fetchedData, countryCode: countryCode})
	}

	render() {
		const {data, countryCode} = this.state
		return (
			<div className={styles.container}>
				<img
					className={styles.image}
					src='https://i.ibb.co/7QpKsCX/image.png'
					alt='Covid-19'
				/>
				<Cards data={data} />
				<CountryPicker onCountryChange={this.handleCountryChange} />
				<Chart data={data} countryCode={countryCode} />
			</div>
		)
	}
}

export default App
