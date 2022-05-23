import styles from '../styles/components/Card.module.scss';

interface Props{
    title: string,
    img: string,
    color: string,
    current_hours: number,
    previous_hours: number,
    timeframe: string
}

const Card: React.FC<Props> = ({ title, img, color, current_hours, previous_hours, timeframe }) => {
    return <div className={styles.outer} style={{backgroundColor: `var(${color})`}}>
        <div className={styles.logo}>
            <img src={ img } alt="" />
        </div>
        <div className={styles.inner}>
            <div className={styles.head}>
                <p>{ title }</p>
                <img src="/icon-ellipsis.svg" alt="ellipsis menu" />
            </div>

            <div className={styles.content}>
                <h1 className={styles.hours}>{ current_hours }hrs</h1>
                <p className={styles.timeframe}>{ timeframe } - { previous_hours }hrs</p>
            </div>
        </div>
    </div>
}
export default Card;