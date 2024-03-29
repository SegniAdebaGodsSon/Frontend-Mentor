import type { NextPage } from 'next'
import { AppContext } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import styles from '../styles/pages/Home.module.scss'
import path from 'path'
import fs from "fs";

interface Day{
    day: string,
    amount: number
}

interface Props{
	list: Day[]
}

const Home: NextPage<Props> = ({ list }) => {

  	return (
    	<>
			<Head>
				<meta charSet="UTF-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

				<title>Frontend Mentor | Expenses chart component</title>
				<meta name="description" content="Generated by create next app" />
			</Head>

			<main className={styles.main}>
				<Card data={list}/>
			</main>
			

			<footer className={styles.footer}>
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel='noreferrer' target="_blank">Frontend Mentor</a>. 
				Coded by <a href="https://www.linkedin.com/in/segniadeba/">Segni Adeba</a>.
			</footer>
    	</>
  )	
}

export async function getStaticProps( ) {
	const dataFilePath = path.join(process.cwd(), "public", "data.json");
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const data = JSON.parse(fileContents);
    return { props: { list: data } };
  }

export default Home
