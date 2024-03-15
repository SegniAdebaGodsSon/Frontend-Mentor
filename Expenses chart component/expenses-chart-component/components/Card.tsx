import styles from '../styles/components/Card.module.scss';
import Bar from './Bar';

interface Day{
    day: string,
    amount: number
}

interface Props{
    data: Day[]
}

const Card: React.FC<Props> = ({ data }) => {
    let maxNum: number = -Infinity;
    data.forEach((a) => {
        maxNum = Math.max(a.amount, maxNum);
    })

    return <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.balance}>
                <p>My balance</p>
                <h2>$921.48</h2>
            </div>

            <img src="./logo.svg" alt="logo" />
        </div>

        <div className={styles.content}>
            <div className={styles.chart_container}>
                <h2>Spending - Last 7 days</h2>
                <div className={styles.bars}>
                    {data.map((d, index) => <Bar key={index} {...d} max={maxNum}/>)}
                </div>
            </div>

            <div className={styles.bottom}>
                <p>Total this month</p>
                <div className={styles.month_total}>
                    <h1>$478.33</h1>
                    <div>
                        <p className={styles.percentage}>+2.4%</p>
                        <p className={styles.text}>from last month</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

}
export default Card;