import styles from '../styles/components/Bar.module.scss';

interface Props{
    day: string,
    amount: number,
    max: number
    
}

const Bar: React.FC<Props> = ({ day, amount, max }) => {

    let heightPercentage = amount*100/max;
    let date = new Date();

    let map = new Map();
    map.set('sun', 0);
    map.set('mon', 1);
    map.set('tue', 2);
    map.set('wed', 3);
    map.set('thu', 4);
    map.set('fri', 5);
    map.set('sat', 6);


    return <div className={styles.bar_container}>
        <div className={styles.content} style={{ height: `${heightPercentage}%` }}>
            <div className={styles.bar} style={{ backgroundColor: map.get(day) == date.getDay() ? 'var(--cyan)' : 'var(--soft-red)' }}>
                <p className={styles.amount}>${amount}</p>
            </div>
            <p className={styles.day}>{day}</p>
        </div>
    </div>

}
export default Bar;