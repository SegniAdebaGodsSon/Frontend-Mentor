import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import styles from '../styles/pages/Home.module.scss'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Frontend Mentor | Advice generator app</title>
			</Head>

			<main className={styles.main}>
				<Card />
			</main>

			<footer className={styles.footer}>
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel='noreferrer' target="_blank">Frontend Mentor</a>.
				Coded by <a href="https://www.linkedin.com/in/segniadeba/">Segni Adeba</a>.
			</footer>
		</>
	)
}

export default Home
