import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../api'
import {Line, Bar} from 'react-chartjs-2'

import styles from './Chart.module.css'

function Chart({data: {confirmed, recovered, deaths, country}, countryCode}) {
	const [dailyData, setDailyData] = useState([])

	useEffect(() => {
		const fetchAPI = async () => {
			setDailyData(await fetchDailyData())
		}
		fetchAPI()
	}, [])

	const lineChart = dailyData ? (
		<Line
			data={{
				labels: dailyData.reverse().map(({lastUpdate}) => lastUpdate),
				datasets: [
					{
						data: dailyData.reverse().map(({confirmed}) => confirmed),
						label: 'Infected',
						fill: true,
						borderColor: 'rgb(75, 192, 192)'
					},
					{
						data: dailyData.map(({deaths}) => deaths),
						label: 'Deaths',
						borderColor: 'red',
						backgroundColor: 'rgba(255, 0, 0, 0.5)',
						fill: true
					}
				]
			}}
		/>
	) : null

	const barChart = confirmed ? (
		<Bar
			data={{
				labels: ['Infected', 'Recovered', 'Deaths'],
				datasets: [
					{
						label: 'People',
						backgroundColor: [
							'rgba(0, 0, 255, 0.5)',
							'rgba(0, 255, 0, 0.5)',
							'rgba(255, 0, 0, 0.712)'
						],
						data: [confirmed, recovered, deaths]
					}
				]
			}}
			options={{
				display: {legend: false},
				title: {display: true, text: `Current State in ${country}`}
			}}
		/>
	) : (
		<p>No Confirmed Cases</p>
	)
	return (
		<div className={styles.container}>{countryCode ? barChart : lineChart}</div>
	)
}

export default Chart
