import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import path from 'path'
import fs from "fs";
import { useState } from "react";
import Card from "../components/Card";
import ProfileCard from "../components/ProfileCard";

interface Data{
	title: string,
	timeframes: {
		daily: {
			current: number,
			previous: number
		},
		weekly: {
			current: number,
			previous: number
		},
		monthly:{
			current: number,
			previous: number
		}
	}
}


interface Props{
	list: Data[]
}

const Home: NextPage<Props> = ({ list }) => {

	// 0 - yesterday 		1 - Last Week 		2 - Last Month
	const [ timeframe, setTimeframe ] = useState(1);


	let timeMap = new Map();
	timeMap.set(0, 'Yesterday');
	timeMap.set(1, 'Last Week');
	timeMap.set(2, 'Last Month');

	let colorMap = new Map();
	colorMap.set("Work", "--light-red-work");
	colorMap.set("Play", "--soft-blue-play");
	colorMap.set("Study", "--light-red-study");
	colorMap.set("Exercise", "--lime-green");
	colorMap.set("Social", "--violet-social");
	colorMap.set("Self Care", "--soft-orange");

	let iconMap = new Map();
	iconMap.set("Work", "/icon-work.svg");
	iconMap.set("Play", "/icon-play.svg");
	iconMap.set("Study", "/icon-study.svg");
	iconMap.set("Exercise", "/icon-exercise.svg");
	iconMap.set("Social", "/icon-social.svg");
	iconMap.set("Self Care", "/icon-self-care.svg");

	
	return (
		<div className={styles.container}>
			<Head>
				<meta charSet="UTF-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

				<title>Frontend Mentor | Time tracking dashboard</title>
			</Head>

			<main className={styles.main}>
				<div className={styles.profile}>
					<ProfileCard setTimeframe={setTimeframe} timeframeTop={timeframe} />
				</div>
				<div className={styles.cards}>
					

					{list.map((data, index) => {

						let current_hours = data.timeframes.daily.current;
						let previous_hours = data.timeframes.daily.previous;
						if(timeframe == 1){
							current_hours = data.timeframes.weekly.current;
							previous_hours = data.timeframes.weekly.previous;
						}else if(timeframe == 2){
							current_hours = data.timeframes.monthly.current;
							previous_hours = data.timeframes.monthly.previous;
						}


						let modData = {
							title: data.title,
							img: iconMap.get(data.title),
							color: colorMap.get(data.title),
							current_hours,
							previous_hours,
							timeframe: timeMap.get(timeframe)
						}
						return <Card key={index} {...modData}/>
					})}
				</div>
			</main>

			<footer className={styles.footer}>
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>. 
    			Coded by <a href="https://www.linkedin.com/in/segniadeba/">Segni Adeba</a>.
			</footer>
		</div>
	);
};

export async function getStaticProps( ) {
	const dataFilePath = path.join(process.cwd(), "public", "data.json");
    const fileContents = fs.readFileSync(dataFilePath, "utf8");
    const data = JSON.parse(fileContents);
    return { props: { list: data } };
  }

export default Home;
