import React from 'react'
import {Grid, Card, CardContent, Typography} from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'

function Cards(props) {
	const {confirmed, recovered, deaths, lastUpdate} = props.data
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justifyContent='center'>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={`${styles.card} ${styles.confirmed}`}>
					<CardContent className={styles['card-content']}>
						<Typography color='textSecondary' gutterBottom>
							Infected
						</Typography>
						<Typography variant='h5'>
							<CountUp start={0} end={confirmed} duration={2.5} separator=',' />
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of active cases of Covid-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={`${styles.card} ${styles.recovered}`}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Recovered Cases
						</Typography>
						<Typography variant='h5'>
							<CountUp start={0} end={recovered} duration={2.5} separator=',' />
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of recovery cases from Covid-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={`${styles.card} ${styles.deaths}`}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Deaths
						</Typography>
						<Typography variant='h5'>
							<CountUp start={0} end={deaths} duration={2.5} separator=',' />
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of deaths caused by Covid-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	)
}

export default Cards
