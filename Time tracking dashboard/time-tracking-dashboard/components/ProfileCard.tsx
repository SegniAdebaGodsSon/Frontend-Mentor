import { Dispatch, SetStateAction, useState } from 'react';
import styles from '../styles/components/ProfileCard.module.scss';

interface Props{
    setTimeframe: Dispatch<SetStateAction<number>>,
    timeframeTop: number
}

const ProfileCard: React.FC<Props> = ({ setTimeframe, timeframeTop }) => {
    const [timeframe, _] = useState(timeframeTop); 

    return <div className={styles.outer}>
        <div className={styles.inner}>
            <div className={styles.image}></div>
            <div className={styles.info}>
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
            </div>
        </div>

        <div className={styles.links}>
            <p 
                onClick={() => {
                    setTimeframe(0);
                    _(0);
                }}
                className={timeframe == 0 ? styles.active_link : styles.link}
            >Daily</p>

            <p 
                onClick={() => {
                    setTimeframe(1);
                    _(1);
                }}
                className={timeframe == 1 ? styles.active_link : styles.link}
            >Weekly</p>

            <p 
                onClick={() => {
                    setTimeframe(2);
                    _(2);
                }}
                className={timeframe == 2 ? styles.active_link : styles.link}
            >Monthly</p>
        </div>
    </div>
}
export default ProfileCard;